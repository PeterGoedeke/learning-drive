import { User } from '@prisma/client'
import { UserRecord } from 'firebase-admin/auth'
import getOpenGraph from '../util/get-open-graph'
import Logger from '../util/logger'
import prisma from '../data/db'
import { database } from 'firebase-admin'
;(async () => {
    const log = Logger.getLogger('populate')

    await Promise.all([
        prisma.post.deleteMany(),
        prisma.user.deleteMany(),
        prisma.openGraph.deleteMany(),
        prisma.category.deleteMany()
    ])
    log.info('deleted all data')

    await prisma.user.createMany({
        data: [
            {
                id: 'HzMvMeQKHwcsDXRG87TevsMapkd2',
                name: 'Ben',
                imageUrl: process.env.DEFAULT_PICTURE_LINK,
                handle: 'Ben0'
            },
            {
                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfaa',
                name: 'Peter',
                imageUrl: process.env.DEFAULT_PICTURE_LINK,
                handle: 'Peter1'
            },
            {
                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfab',
                name: 'Alex',
                imageUrl: process.env.DEFAULT_PICTURE_LINK,
                handle: 'Alex2'
            },
            {
                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfac',
                name: 'Kinan',
                imageUrl: process.env.DEFAULT_PICTURE_LINK,
                handle: 'Kinan3'
            }
        ]
    })
    log.info('created users')

    prisma.user.updateMany({
        data: [
            {
                where: {
                    id: 'HzMvMeQKHwcsDXRG87TevsMapkd2'
                },
                data: {
                    followedUsers: {
                        connect: [
                            {
                                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfaa'
                            },
                            {
                                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfab'
                            },
                            {
                                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfac'
                            }
                        ]
                    },
                    followingUsers: [
                        {
                            id: '6edd1b55-4fc4-48a4-ba96-a161987fcfaa'
                        },
                        {
                            id: '6edd1b55-4fc4-48a4-ba96-a161987fcfac'
                        }
                    ]
                }
            }
        ]
    })

    log.info('updates user followings')

    await prisma.category.createMany({
        data: [
            {
                name: 'c++'
            },
            {
                name: 'Java'
            },
            {
                name: 'Python'
            },
            {
                name: 'JavaScript'
            }
        ]
    })
    log.info('created categories')

    await prisma.openGraph.createMany({
        data: [
            {
                title: 'Open Graph Article 1',
                description: 'This is the first OG',
                url: 'https://test.com/test1',
                imageUrl: 'https://test.com/image1.png'
            },
            {
                title: 'Open Graph Article 2',
                description: 'This is the second OG',
                url: 'https://test.com/test2',
                imageUrl: 'https://test.com/image2.png'
            },
            {
                title: 'Open Graph Article 3',
                description: 'This is the third OG',
                url: 'https://test.com/test3',
                imageUrl: 'https://test.com/image3.png'
            }
        ]
    })
    log.info('created OpenGraph URLs')

    await prisma.post.createMany({
        data: [
            {
                id: 1,
                content: 'Hello, this is my first post! I am Peter!',
                categories: ['Java', 'c++'],
                resource: 'https://test.com/test1',
                openGraphUrl: 'https://test.com/test1',
                userId: '6edd1b55-4fc4-48a4-ba96-a161987fcfaa'
            },
            {
                id: 2,
                content: 'I am Kinan and I love JS xD',
                categories: ['JavaScript'],
                resource: 'https://test.com/test2',
                openGraphUrl: 'https://test.com/test2',
                userId: '6edd1b55-4fc4-48a4-ba96-a161987fcfac'
            },
            {
                id: 3,
                content: 'Ich bin Alek, ich leibe JavaScript und python<3',
                categories: ['JavaScript', 'python'],
                resource: 'https://test.com/test3',
                openGraphUrl: 'https://test.com/test3',
                userId: '6edd1b55-4fc4-48a4-ba96-a161987fcfab'
            },
            {
                id: 4,
                content: 'Ben is the best Java developer in the world!',
                categories: ['Java'],
                resource: 'https://test.com/test2',
                openGraphUrl: 'https://test.com/test2',
                userId: 'HzMvMeQKHwcsDXRG87TevsMapkd2'
            }
        ]
    })

    log.info('created posts')

    await prisma.post.updateMany({
        data: [
            {
                where: {
                    id: 1
                },
                data: {
                    likedUsers: {
                        connect: [
                            {
                                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfab'
                            },
                            {
                                id: '6edd1b55-4fc4-48a4-ba96-a161987fcfac'
                            }
                        ]
                    }
                }
            },
            {
                where: {
                    id: 2
                },
                data: {
                    likedUsers: {
                        connect: {
                            id: 'HzMvMeQKHwcsDXRG87TevsMapkd2'
                        }
                    }
                }
            },
            {
                where: {
                    id: 4
                },
                data: {
                    likedUsers: {
                        connect: {
                            id: '6edd1b55-4fc4-48a4-ba96-a161987fcfaa'
                        }
                    }
                }
            }
        ]
    })

    log.info('liked posts')
})()
