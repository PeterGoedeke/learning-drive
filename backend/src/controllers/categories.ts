import { Request, Response } from 'express'
import asyncHandler from 'express-async-handler'
import { ParamsDictionary } from 'express-serve-static-core/index'
import { StatusCodes } from 'http-status-codes'
import repository from '../data/repository'

type getCategories = (req: Request, res: Response<Paths.GetCategories.Responses.$200>) => void

type createCategory = (
    req: Request<ParamsDictionary, {}, Paths.CreateCategory.RequestBody>,
    res: Response<Paths.CreateCategory.Responses.$201 | Paths.CreateCategory.Responses.$400>
) => void

const getCategoriesHandler: getCategories = async (req, res) => {
    const categories = await repository.getCategories()

    return res.status(StatusCodes.OK).json({
        categories: categories.map(category => category.name)
    })
}

export const getCategories = asyncHandler(getCategoriesHandler)

const createCategoryHandler: createCategory = async (req, res) => {
    const category = req.body.category

    // TODO: add casing checking
    const response = await repository.createCategory(category)

    return res.location(`/categories/${response.name}`).status(StatusCodes.CREATED).json({
        category: response.name
    })
}

export const createCategory = asyncHandler(createCategoryHandler)
