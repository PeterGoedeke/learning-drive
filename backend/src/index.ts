import dotenv from 'dotenv'
dotenv.config()

import express, { NextFunction, Request, Response } from 'express'
import path from 'path'
import * as OpenApiValidator from 'express-openapi-validator'
import { ValidationError } from 'express-openapi-validator/dist/framework/types'
import Logger from './util/logger'
import expressWinston from 'express-winston'

const app = express()

app.use(express.json())
app.use(express.text())
app.use(express.urlencoded({ extended: true }))

app.use(
    expressWinston.logger({
        winstonInstance: Logger.getLogger('express'),
        msg: '{{req.hostname}} - - - "{{req.method}} {{req.url}} HTTP{{req.httpVersion}}" {{res.statusCode}} -',
        colorize: true
    })
)

app.get('/', (req, res) => {
    return res.status(200).json({
        apiVersion: 1.0
    })
})

import verify from './util/verify'
import { isWebUri } from 'valid-url'

app.use(
    OpenApiValidator.middleware({
        apiSpec: '../spec.yaml',
        validateRequests: true,
        validateResponses: true,
        operationHandlers: path.join(__dirname + '/controllers'),
        validateSecurity: {
            handlers: {
                FirebaseAuth: async (req: Request, scopes, schema) => {
                    if (!req.headers.authorization || !req.headers.authorization.includes(' ')) {
                        throw new Error(
                            `Authorization header '${req.headers.authorization}' does not follow Bearer format.`
                        )
                    }
                    const token = req.headers.authorization.split(' ')[1]

                    req.userId = await verify(token)
                    return true
                }
            }
        },
        validateFormats: 'fast',
        formats: [
            {
                name: 'url',
                type: 'string',
                validate: (value: string) => {
                    return !!isWebUri(value)
                }
            }
        ]
    })
)

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
    if (!(err.status && err.errors)) {
        return next(err)
    }
    const verror = err as ValidationError
    if (res.headersSent) {
        return next(verror)
    }
    Logger.getLogger('validation').warn(`${verror.errors[0].path} ${verror.errors[0].message}`)
    return res.status(verror.status).json({
        error: verror
    })
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (res.headersSent) {
        return next(err)
    }
    Logger.getLogger('controller').error(`${err.stack}`)

    const displayError =
        process.env.NODE_ENV === 'production'
            ? 'An unexpected error has occurred. Please try again later.'
            : err.stack
    return res.status(500).json({
        error: displayError
    })
})

app.listen(process.env.PORT, () => {
    Logger.getLogger('express').info(`Server started at port ${process.env.PORT}`)
})

const signals = [
    'SIGHUP',
    'SIGINT',
    'SIGQUIT',
    'SIGILL',
    'SIGTRAP',
    'SIGABRT',
    'SIGBUS',
    'SIGFPE',
    'SIGUSR1',
    'SIGSEGV',
    'SIGUSR2',
    'SIGTERM'
]
signals.forEach(signal => {
    process.on(signal, () => {
        Logger.getLogger('general').info(`Received ${signal}, closing server...`)
        process.exit(1)
    })
})
