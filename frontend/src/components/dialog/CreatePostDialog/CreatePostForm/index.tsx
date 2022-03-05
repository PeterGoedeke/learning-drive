import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import {
  createPostFormFields,
  createPostFormSchema,
} from '../../../../utils/schema/createPostSchema';
import { SubmitButton } from '../../../form/SubmitButton';
import TextField from '../../../form/TextField';
import SendIcon from '../../../icons/SendIcon';

interface CreatePostFormProps {
  handleSubmit: (data: createPostFormFields) => void | Promise<void>;
}

export const CreatePostForm = ({ handleSubmit }: CreatePostFormProps) => {
  const methods = useForm<createPostFormFields>({
    resolver: yupResolver(createPostFormSchema),
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField name='content' size='small' label='Message' multiline rows={4} />
          <TextField name='link' size='small' label='Link' />
          <SubmitButton color='primary' variant='contained' size='large' endIcon={<SendIcon />}>
            Create Post
          </SubmitButton>
        </Stack>
      </form>
    </FormProvider>
  );
};
