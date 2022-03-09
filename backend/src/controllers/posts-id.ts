import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ParamsDictionary } from 'express-serve-static-core/index'
import { StatusCodes } from 'http-status-codes'
import { dbPostToPostDto } from '../data/post'
import repository from '../data/repository'
import Logger from '../util/logger'

const log = Logger.getLogger('posts-id')

type getPostById = (
    req: Request,
    res: Response<Paths.GetPostById.Responses.$200 | Paths.GetPostById.Responses.$404>
) => void

type updatePost = (
    req: Request<ParamsDictionary, {}, Paths.UpdatePost.RequestBody>,
    res: Response<
        | Paths.UpdatePost.Responses.$204
        | Paths.UpdatePost.Responses.$400
        | Paths.UpdatePost.Responses.$404
    >
) => void

type reactToPost = (
    req: Request<ParamsDictionary, {}, Paths.ReactToPost.RequestBody>,
    res: Response<
        | Paths.ReactToPost.Responses.$204
        | Paths.ReactToPost.Responses.$400
        | Paths.ReactToPost.Responses.$404
    >
) => void

const getPostByIdHandler: getPostById = async (req, res) => {
    const id = Number(req.params.id)

    const post = await repository.getPostById(id)
    if (post === null) {
        return res.status(StatusCodes.NOT_FOUND).end()
    }

    const user = await repository.getCurrentUser(req.userId)

    return res.status(StatusCodes.OK).json(dbPostToPostDto(post, user))
}

export const getPostById = asyncHandler(getPostByIdHandler)

const updatePostHandler: updatePost = async (req, res) => {
    const postId = Number(req.params.id)

    const response = await repository.updatePost(postId, req.body)

    if (response === null) {
        return res.status(StatusCodes.NOT_FOUND).end()
    }

    return res.status(StatusCodes.NO_CONTENT).end()
}

export const updatePost = asyncHandler(updatePostHandler)

const deletePostHandler: updatePost = async (req, res) => {
    const postId = Number(req.params.id)

    // check if user exists

    const response = await repository.deletePost(postId)

    if (response === null) {
        return res.status(StatusCodes.NOT_FOUND).end()
    }

    return res.status(StatusCodes.NO_CONTENT).end()
}

export const deletePost = asyncHandler(deletePostHandler)

const reactToPostHandler: reactToPost = async (req, res) => {
    const postId = Number(req.params.id)

    try {
        if (req.body.liked) {
            await repository.likePost(req.userId, postId)
        } else {
            await repository.unlikePost(req.userId, postId)
        }
    } catch (error) {
        log.error(error)
        return res.status(StatusCodes.NOT_FOUND).end()
    }

    return res.status(StatusCodes.NO_CONTENT).end()
}

export const reactToPost = asyncHandler(reactToPostHandler)
