import { Divider, Stack } from '@mui/material';
import { useDialog } from 'react-dialog-async';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Post } from '../../Post';
import { EndOfFeed } from '../EndOfFeed';

import { postsApi } from '../../../api';
import { Post as PostType } from '../../../api/client';
import { useAuth } from '../../../hooks/useAuth';
import { usePostFeed } from '../../../hooks/usePostFeed';
import { postsSearchFilter } from '../../../utils/schema/searchPostsSchema';
import CreatePostDialog from '../../dialog/CreatePostDialog';
import { PostSkeleton } from '../../Post/PostSkeleton';

const FeedSkeleton = () => (
  <>
    <PostSkeleton />
    <Divider />
    <PostSkeleton />
    <Divider />
    <PostSkeleton />
    <Divider />
  </>
);

export interface PostFeedProps {
  filter?: postsSearchFilter;
  endMessage?: (hasPosts: boolean) => string | undefined;
}

export const PostFeed = ({
  filter,
  endMessage = (hasPosts) => (hasPosts ? undefined : 'It seems like there arent any posts here'),
}: PostFeedProps) => {
  const { posts, loadMore, hasMore } = usePostFeed({ filter });
  const { user } = useAuth();
  const createPostDialog = useDialog(CreatePostDialog);

  const handleEdit = () => {};

  const reactToPost = async (id: number, liked: boolean) => {
    await postsApi.reactToPost(String(id), { liked });
  };

  const editPost = async (postData: PostType) => {
    await createPostDialog.show({
      postId: postData._id,
      initialValues: {
        link: postData.resource?.link,
        content: postData.content,
        categories: postData.categories.map((category) => ({
          text: category,
          key: category.toLowerCase(),
        })),
      },
    });
  };

  return (
    <InfiniteScroll
      dataLength={posts.length}
      next={loadMore}
      hasMore={hasMore}
      loader={<FeedSkeleton />}
      endMessage={<EndOfFeed message={endMessage(posts.length !== 0)} />}
    >
      <Stack>
        {posts.map((p, i) => (
          <>
            <Post
              data={p}
              userId={user?.uid}
              key={p._id}
              onToggleLike={(liked) => reactToPost(p._id, liked)}
              onEdit={editPost}
            />
            <Divider />
          </>
        ))}
      </Stack>
    </InfiniteScroll>
  );
};
