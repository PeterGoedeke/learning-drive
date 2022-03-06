import { applicationDefault, initializeApp } from 'firebase-admin/app'
import { getAuth } from 'firebase-admin/auth'
import repository from '../data/repository'
import Logger from './logger'

initializeApp({
    credential: applicationDefault(),
    databaseURL: 'https://learning-drive-fe98e.firebaseio.com'
})

const log = Logger.getLogger('verification')

export default async (token: string) => {
    try {
        const decodedToken = await getAuth().verifyIdToken(token)
        try {
            const user = await getAuth().getUser(decodedToken.uid)
            if (!user) {
                log.info(`No user exists for ${decodedToken.uid}, creating user`)
                throw 'No user exists'
            }
            await repository.createUser(user)
            return decodedToken.uid
        } catch (error: any) {
            log.info(`Failed inside`)
            throw error
        }
    } catch (error: any) {
        log.info(`Authentication with token ${token} failed`)
        throw error
    }
}
