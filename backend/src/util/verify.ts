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
            const firebaseUser = await getAuth().getUser(decodedToken.uid)
            if (!firebaseUser) {
                const errorMessage = `No user exists for ${decodedToken.uid}`
                log.info(errorMessage)
                throw errorMessage
            }
            const databaseUser = await repository.getUserById(decodedToken.uid)
            if (!databaseUser) {
                await repository.createUser(firebaseUser)
            }
            return decodedToken.uid
        } catch (error: any) {
            log.info(`Error in getting user id from token`)
            throw error
        }
    } catch (error: any) {
        log.info(`Authentication with token ${token} failed`)
        throw error
    }
}
