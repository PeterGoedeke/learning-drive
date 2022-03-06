import { Divider, Stack } from '@mui/material';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Post } from '../../Post';
import { EndOfFeed } from '../EndOfFeed';

import { usePostFeed } from '../../../hooks/usePostFeed';
import { postsSearchFilter } from '../../../utils/schema/searchPostsSchema';
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
            <Post data={p} userId={'123'} key={i} />
            <Divider />
          </>
        ))}
      </Stack>
    </InfiniteScroll>
  );
};
