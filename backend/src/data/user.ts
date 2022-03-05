import { Post, User, OpenGraph } from '@prisma/client'

type dbUser = User & {
    followed: User[]
    followers: User[]
}

const dbUserToUserDto = (user: User): Components.Schemas.User => {
    return {
        _id: user.id,
        handle: user.handle,
        imageUrl: user.imageUrl,
        name: user.name
    }
}

const dbUserToUserFullProfileDto = (user: dbUser): Components.Schemas.UserFullProfile => {
    return {
        user: dbUserToUserDto(user),
        followed: user.followed.map(dbUserToUserDto),
        followers: user.followers.map(dbUserToUserDto),
        followedCount: user.followed.length,
        followerCount: user.followers.length
    }
}
