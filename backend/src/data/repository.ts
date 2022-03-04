import prisma from './db'
import { Prisma, Post, User, Category } from '@prisma/client'

const repository = {
    async createPost(userId: string, post: Components.Schemas.CreatePost) {
        return await prisma.post.create({
            data: {
                content: post.content,
                timestampCreated: Date.now(),
                timestampModified: Date.now(),
                categories: post.categories as string[],
                resource: post.resource || null,
                userId
            }
        })
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
                timestampModified: Date.now(),
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
                likedUsers: true
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
    }
}

export default repository
