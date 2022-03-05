import { Post, User, OpenGraph } from '@prisma/client'

type dbPost = Post & {
    user: User
    likedUsers: User[]
    openGraph?: OpenGraph
}

const dbPostToPostDto = (post: dbPost, user: User): Components.Schemas.Post => {
    return {
        _id: post.id,
        categories: post.categories as any, // fix length complaint
        content: post.content,
        timestampCreated: post.timestampCreated.getTime(),
        timestampModified: post.timestampModified.getTime(),
        resource: post.resource
            ? {
                  link: post.resource,
                  openGraph: {
                      description: post.openGraph?.description || undefined,
                      imageUrl: post.openGraph?.imageUrl || undefined,
                      title: post.openGraph?.title || undefined,
                      url: post.openGraph?.url || undefined
                  }
              }
            : undefined,
        reactions: {
            isPersonallyLiked: post.likedUsers.includes(user),
            likes: post.likedUsers.reduce((acc, _) => acc + 1, 0)
        },
        user
    }
}
