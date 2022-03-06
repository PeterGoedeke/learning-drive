import { array, boolean, object, SchemaOf, string } from 'yup';

export interface createPostFormFields {
  content: string;
  link?: string;
  categories: { key: string; text: string; new?: boolean }[];
}

export const createPostFormSchema: SchemaOf<createPostFormFields> = object().shape({
  content: string()
    .required('A post must have content')
    .min(10, 'Posts must be at least 10 characters long'),
  link: string().url('Please enter a valid url'),
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
