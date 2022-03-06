import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import {
  searchPostsFormFields,
  searchPostsFormSchema,
} from '../../../../utils/schema/searchPostsSchema';
import { CategorySelect } from '../../../form/CategorySelect';
import { SubmitButton } from '../../../form/SubmitButton';
import TextField from '../../../form/TextField';
import SearchIcon from '../../../icons/SearchIcon';

interface SearchPostsFormProps {
  handleSubmit: (data: searchPostsFormFields) => void | Promise<void>;
  initialValues?: Partial<searchPostsFormFields>;
}

export const SearchPostsForm = ({ handleSubmit, initialValues }: SearchPostsFormProps) => {
  const methods = useForm<searchPostsFormFields>({
    resolver: yupResolver(searchPostsFormSchema),
    defaultValues: { ...initialValues, categories: initialValues?.categories || [] },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField name='content' size='small' label='Filter by message' autoComplete={'off'} />

          <CategorySelect name='categories' label='Filter by categories' />
          <SubmitButton color='primary' variant='contained' size='large' endIcon={<SearchIcon />}>
            Search
          </SubmitButton>
        </Stack>
      </form>
    </FormProvider>
  );
};
