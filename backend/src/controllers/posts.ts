import { OpenGraph, Post } from '@prisma/client'
import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ParamsDictionary } from 'express-serve-static-core/index'
import { StatusCodes } from 'http-status-codes'
import { dbPostToPostDto } from '../data/post'
import repository from '../data/repository'

type getPosts = (
    req: Request<ParamsDictionary, {}, Paths.GetPosts.RequestBody>,
    res: Response<Paths.GetPosts.Responses.$200 | Paths.GetPosts.Responses.$400>
) => void

type createPosts = (
    req: Request<ParamsDictionary, {}, Paths.CreatePost.RequestBody>,
    res: Response<Paths.CreatePost.Responses.$201 | Paths.CreatePost.Responses.$400>
) => void

const getPostsHandler: getPosts = async (req, res) => {
    const posts = await repository.getPosts(req.body)

    const user = await repository.getCurrentUser(req.userId)

    // TODO: 400 if user doesn't exist

    return res.status(StatusCodes.OK).json({
        posts: posts.map(post => dbPostToPostDto(post, user))
    })
}

export const getPosts = asyncHandler(getPostsHandler)

const createPostsHandler: createPosts = async (req, res) => {
    const promises: [Promise<{ count: number }>, Promise<OpenGraph>?] = [
        repository.ensureCategoriesExist(req.body.categories as string[])
    ]

    if (req.body.resource) {
        promises.push(repository.getOrCreateOpenGraph(req.body.resource))
    }

    await Promise.all(promises)
    const response = await repository.createPost(req.userId, req.body)

    return res.status(StatusCodes.CREATED).end()
}

export const createPosts = asyncHandler(createPostsHandler)
