import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../logger'
import { ParamsDictionary } from 'express-serve-static-core/index'

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

const getPostByIdHandler: getPostById = async (req, res) => {}

export const getPostById = asyncHandler(getPostByIdHandler)

const updatePostHandler: updatePost = async (req, res) => {}

export const updatePost = asyncHandler(updatePostHandler)

const reactToPostHandler: reactToPost = async (req, res) => {}

export const reactToPost = asyncHandler(reactToPostHandler)
