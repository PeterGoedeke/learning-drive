import { array, boolean, object, SchemaOf, string } from 'yup';

import { GetPostQuery } from '../../api/client';

export interface searchPostsFormFields {
  content?: string;
  categories: { key: string; text: string; new?: boolean }[];
}

export type postsSearchFilter = Omit<GetPostQuery, 'pageSize' | 'offset'>;

export const searchPostsFormSchema: SchemaOf<searchPostsFormFields> = object().shape({
  content: string(),
  categories: array()
    .of(
      object().shape({
        key: string().required().max(20, "Category name can't be more than 20 characters"),
        text: string().required(),
        new: boolean(),
      })
    )
    .max(3, 'You can only select up to 3 categories'),
});
