import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../util/logger'
import { ParamsDictionary } from 'express-serve-static-core/index'
import repository from '../data/repository'
import { dbPostToPostDto } from '../data/post'

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

    return res.status(StatusCodes.OK).json({
        posts: posts.map(post => dbPostToPostDto(post, post.user))
    })
}

export const getPosts = asyncHandler(getPostsHandler)

const createPostsHandler: createPosts = async (req, res) => {}

export const createPosts = asyncHandler(createPostsHandler)
