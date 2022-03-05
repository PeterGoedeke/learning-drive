import { Request, Response } from 'express'
import { StatusCodes } from 'http-status-codes'
import asyncHandler from 'express-async-handler'
import Logger from '../logger'
import { ParamsDictionary } from 'express-serve-static-core/index'

type getCategories = (req: Request, res: Response<Paths.GetCategories.Responses.$200>) => void

type createCategory = (
    req: Request<ParamsDictionary, {}, Paths.CreateCategory.RequestBody>,
    res: Response<Paths.CreateCategory.Responses.$201 | Paths.CreateCategory.Responses.$400>
) => void

const getCategoriesHandler: getCategories = async (req, res) => {}

export const getCategories = asyncHandler(getCategoriesHandler)

const createCategoryHandler: createCategory = async (req, res) => {}

export const createCategory = asyncHandler(createCategoryHandler)
