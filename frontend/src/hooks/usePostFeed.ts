import { useState } from 'react';
import useSWRInfinite from 'swr/infinite';

import { postsApi } from '../api';
import { GetPostQuery, Post } from '../api/client';
import { queryKey } from '../utils/queryKeys';

interface usePostFeedOpts {
  pageSize?: number;
  filter?: Omit<GetPostQuery, 'pageSize' | 'offset'>;
}

interface postFeedData {
  posts: Post[];
  loadMore: () => {};
  hasMore: boolean;
}

/**
 * Hook that abstracts logic for fetching posts to display in an infinite scroll feed
 */
export const usePostFeed = ({ pageSize = 10, filter = {} }: usePostFeedOpts = {}): postFeedData => {
  const [hasMore, setHasMore] = useState(true);

  const { data, size, setSize } = useSWRInfinite(
    (pageIndex, prevPageData) => {
      if (pageIndex && prevPageData.length < pageSize) {
        setHasMore(false);
        return null;
      }
      return queryKey.POSTS(pageIndex);
    },
    async (_, page) =>
      (
        await postsApi.getPosts({
          pageSize,
          offset: page,
          ...filter,
        })
      ).data.posts
  );

  // Turn array of pages of posts into just an array of posts
  const posts = data?.reduce((acc, curr) => [...acc, ...curr], []) || [];

  return {
    posts,
    loadMore: () => setSize(size + 1),
    hasMore,
  };
};
