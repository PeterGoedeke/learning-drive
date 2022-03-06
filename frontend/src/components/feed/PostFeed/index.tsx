import { Box, Divider, Stack } from '@mui/material';
import { useCallback, useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';

import { Post } from '../../Post';
import { EndOfFeed } from '../EndOfFeed';

import { Post as PostType } from '../../../api/client';
import { PAGE_MARGIN } from '../../../utils/constants';
import { PostSkeleton } from '../../Post/PostSkeleton';
import { post1, post2, post3 } from '../../Post/testData';

export const PostFeed = () => {
  const [hasMore, setHasMore] = useState(true);

  const [posts, setPosts] = useState<PostType[]>([]);

  const fetchMorePosts = useCallback(() => {
    window.setTimeout(
      () =>
        setPosts((p) => {
          if (p.length > 20) {
            setHasMore(false);
          }
          return [...p, post1, post2, post3];
        }),
      150
    );
  }, []);

  useEffect(() => {
    fetchMorePosts();
  }, [fetchMorePosts]);

  return (
    <InfiniteScroll
      dataLength={posts.length} //This is important field to render the next data
      next={fetchMorePosts}
      hasMore={hasMore}
      loader={
        <>
          <PostSkeleton />
          <Divider />
          <PostSkeleton />
          <Divider />
          <PostSkeleton />
          <Divider />
        </>
      }
      endMessage={<EndOfFeed />}
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
