import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../util/logger'
import { ParamsDictionary } from 'express-serve-static-core/index'
import repository from '../data/repository'
import { dbPostToPostDto } from '../data/post'

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

const reactToPostHandler: reactToPost = async (req, res) => {}

export const reactToPost = asyncHandler(reactToPostHandler)
