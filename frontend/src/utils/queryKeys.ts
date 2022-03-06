export const queryKey = {
  CATEGORIES: 'categories',
  POSTS: (page: number): [string, number] => ['posts', page],
};
