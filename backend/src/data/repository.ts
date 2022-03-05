import prisma from './db'
import { Prisma, Post, User, Category } from '@prisma/client'
import getOpenGraph from '../util/get-open-graph'
import { UserRecord } from 'firebase-admin/auth'

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

    async getPosts(query: Components.Schemas.GetPostQuery) {
        return await prisma.post.findMany({
            where: {
                userId: query.userIdQuery,
                content: {
                    contains: query.searchQuery
                },
                categories: {
                    hasEvery: query.searchCategories
                }
            },
            include: {
                user: true,
                likedUsers: true,
                openGraph: true
            },
            take: query.pageSize,
            skip: query.pageSize && query.offset ? query.pageSize * query.offset : undefined
        })
    },

    async getCategories() {
        return await prisma.category.findMany()
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

    async createUser(user: UserRecord) {
        try {
            const name = user.displayName || 'Unnamed'
            const userCount = prisma.user.count()
            return await prisma.user.create({
                data: {
                    id: user.uid,
                    name,
                    imageUrl: user.photoURL || process.env.DEFAULT_PICTURE_LINK,
                    handle: name + userCount
                }
            })
        } catch (error: any) {
            // if this is a duplicate error, then retry until it isn't
        }
    }
}

export default repository
