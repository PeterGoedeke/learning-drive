import { User } from '@prisma/client'
import { UserRecord } from 'firebase-admin/auth'
import getOpenGraph from '../util/get-open-graph'
import Logger from '../util/logger'
import prisma from './db'

const log = Logger.getLogger('repository')

const repository = {
    async createPost(userId: string, post: Components.Schemas.CreatePost) {
        return await prisma.post.create({
            data: {
                content: post.content,
                categories: post.categories as string[],
                resource: post.resource || null,
                openGraphUrl: post.resource,
                userId
            }
        })
    },

    async getOrCreateOpenGraph(url: string) {
        let openGraph = await prisma.openGraph.findUnique({
            where: {
                url
            }
        })

        if (openGraph === null) {
            const openGraphData = (await getOpenGraph(url)) || { url }
            openGraph = await prisma.openGraph.create({
                data: openGraphData
            })
        }
        return openGraph
    },

    async likePost(userId: string, postId: number) {
        return await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                likedUsers: {
                    connect: {
                        id: userId
                    }
                }
            }
        })
    },

    async unlikePost(userId: string, postId: number) {
        return await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                likedUsers: {
                    delete: {
                        id: userId
                    }
                }
            }
        })
    },

    async getPostById(id: number) {
        return await prisma.post.findUnique({
            where: {
                id
            },
            include: {
                user: true,
                likedUsers: true,
                openGraph: true
            }
        })
    },

    async updatePost(postId: number, post: Components.Schemas.CreatePost) {
        return await prisma.post.update({
            where: {
                id: postId
            },
            data: {
                content: post.content,
                categories: post.categories as string[],
                resource: post.resource || null
            }
        })
    },

    async getPosts(query: Components.Schemas.GetPostQuery, userId: string) {
        let userQuery: string | { in: string[] } | undefined = query.userIdQuery
        if (query.followed) {
            const user = await prisma.user.findUnique({
                where: {
                    id: userId
                },
                include: {
                    followed: true
                }
            })
            if (user === null) {
                throw `Registered user with id ${userId} not found in database.`
            }

            const ids = user.followed.map(followedUser => followedUser.id)
            userQuery = {
                in: ids
            }
        }

        return await prisma.post.findMany({
            where: {
                userId: userQuery,
                content: {
                    contains: query.searchQuery
                },
                categories: query.searchCategories
                    ? {
                          hasEvery: query.searchCategories
                      }
                    : undefined
            },
            include: {
                user: true,
                likedUsers: true,
                openGraph: true
            },
            take: query.pageSize,
            skip: query.pageSize && query.offset ? query.pageSize * query.offset : undefined,
            orderBy: {
                timestampCreated: 'desc'
            }
        })
    },

    async getCategories() {
        return await prisma.category.findMany()
    },

    async ensureCategoriesExist(categories: string[]) {
        const created = await prisma.category.createMany({
            data: categories.map(category => ({ name: category })),
            skipDuplicates: true
        })
        return created
    },

    async createCategory(name: string) {
        return await prisma.category.create({
            data: {
                name
            }
        })
    },

    async getUserById(userId: string) {
        return await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                followed: true,
                followers: true
            }
        })
    },

    async getCurrentUser(userId: string) {
        return await prisma.user.findUnique({
            where: {
                id: userId
            },
            include: {
                followed: true,
                followers: true
            },
            rejectOnNotFound: true
        })
    },

    async createUser(user: UserRecord): Promise<User> {
        try {
            const name = user.displayName || 'Unnamed'
            const userCount = await prisma.user.count()
            const handle = name + userCount
            log.info(
                `Attempting to generate handle for user with id ${user.uid}. Handle will be ${handle}`
            )

            return await prisma.user.create({
                data: {
                    id: user.uid,
                    name,
                    imageUrl: user.photoURL || process.env.DEFAULT_PICTURE_LINK,
                    handle
                }
            })
        } catch (error: any) {
            // if unique constraint on handle violated, we should retry generating a handle
            if (error.meta.target.includes('handle')) {
                log.info(`Retrying handle generation for user with id ${user.uid}`)
                return this.createUser(user)
            }
            throw error
        }
    }
}

export default repository
