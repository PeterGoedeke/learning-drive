import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../logger'
import { ParamsDictionary } from 'express-serve-static-core/index'

type getPosts = (
    req: Request<ParamsDictionary, {}, Paths.GetPosts.RequestBody>,
    res: Response<Paths.GetPosts.Responses.$200 | Paths.GetPosts.Responses.$400>
) => void

type createPosts = (
    req: Request<ParamsDictionary, {}, Paths.CreatePost.RequestBody>,
    res: Response<Paths.CreatePost.Responses.$201 | Paths.CreatePost.Responses.$400>
) => void
