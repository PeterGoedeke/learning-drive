import { PostsApi } from './client';

export const postsApi = new PostsApi(undefined, process.env.REACT_APP_API_URL);
