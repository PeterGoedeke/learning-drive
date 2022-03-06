import { postsSearchFilter } from './schema/searchPostsSchema';

export const queryKey = {
  CATEGORIES: 'categories',
  POSTS: (page: number, filter: postsSearchFilter): [string, number, postsSearchFilter] => [
    'posts',
    page,
    filter,
  ],
};
