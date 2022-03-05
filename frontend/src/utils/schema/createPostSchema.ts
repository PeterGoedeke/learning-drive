import { array, object, SchemaOf, string } from 'yup';

export interface createPostFormFields {
  content: string;
  link?: string;
  categories: { key: string; text: string }[];
}

export const createPostFormSchema: SchemaOf<createPostFormFields> = object().shape({
  content: string().required('A post must have content'),
  link: string().url('Please enter a valid url'),
  categories: array().of(
    object().shape({
      key: string().required(),
      text: string().required(),
    })
  ),
});