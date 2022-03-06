import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { StatusCodes } from 'http-status-codes'
import repository from '../data/repository'
import { dbUserToUserFullProfileDto } from '../data/user'

type getUserById = (
    req: Request,
    res: Response<Paths.GetUserById.Responses.$200 | Paths.GetUserById.Responses.$404>
) => void

const getUserByIdHandler: getUserById = async (req, res) => {
    const user = await repository.getUserById(req.params.id)

    if (user === null) {
        return res.status(StatusCodes.NOT_FOUND).end()
    }

    return res.status(StatusCodes.OK).json(dbUserToUserFullProfileDto(user))
}

export const getUserById = asyncHandler(getUserByIdHandler)
