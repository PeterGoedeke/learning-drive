import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../util/logger'
import { ParamsDictionary } from 'express-serve-static-core/index'

type getUserById = (
    req: Request,
    res: Response<Paths.GetUserById.Responses.$200 | Paths.GetUserById.Responses.$404>
) => void

const getUserByIdHandler: getUserById = async (req, res) => {}

export const getUserById = asyncHandler(getUserByIdHandler)
