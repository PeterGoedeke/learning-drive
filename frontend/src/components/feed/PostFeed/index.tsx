import { Divider, Stack } from '@mui/material';
import { useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useSWRInfinite from 'swr/infinite';

import { Post } from '../../Post';
import { EndOfFeed } from '../EndOfFeed';

import { postsApi } from '../../../api';
import { queryKey } from '../../../utils/queryKeys';
import { PostSkeleton } from '../../Post/PostSkeleton';

export const PostFeed = () => {
  const [hasMore, setHasMore] = useState(true);

  const { data, size, setSize } = useSWRInfinite(
    (pageIndex, prevPageData) => {
      if (pageIndex && prevPageData.length < 10) {
        setHasMore(false);
        return null;
      }
      return queryKey.POSTS(pageIndex);
    },
    async (_, page) =>
      (
        await postsApi.getPosts({
          pageSize: 10,
          offset: page,
        })
      ).data.posts
  );

  // const fetchMorePosts = useCallback(async () => {
  //   const { data } = await postsApi.getPosts({
  //     pageSize: 10,
  //     offset: pagesFetched.current,
  //   });

  //   const { posts } = data;

  //   if (posts.length < 10) {
  //     setHasMore(false);
  //   }

  //   setPosts((prevPosts) => {
  //     pagesFetched.current += 1;
  //     return [...prevPosts, ...posts];
  //   });
  // }, []);

  // Turn 2d array into 1d array
  const posts = data?.reduce((acc, curr) => [...acc, ...curr], []) || [];

  return (
    <InfiniteScroll
      dataLength={posts.length} //This is important field to render the next data
      next={() => setSize(size + 1)}
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
      endMessage={
        <EndOfFeed
          message={posts.length === 0 ? 'It seems like there arent any posts here' : undefined}
        />
      }
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
