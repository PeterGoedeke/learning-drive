import Logger from './logger'

const log = Logger.getLogger('verification')

// function used to determine user authentication
export default (token: string) => {
    return 5 // the id of the user
}
