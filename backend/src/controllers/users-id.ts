import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../logger'
import { ParamsDictionary } from 'express-serve-static-core/index'

type getUserById = (
    req: Request,
    res: Response<Paths.GetUserById.Responses.$200 | Paths.GetUserById.Responses.$404>
) => void
