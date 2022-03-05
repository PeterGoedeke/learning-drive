import { yupResolver } from '@hookform/resolvers/yup';
import { Stack } from '@mui/material';
import { FormProvider, useForm } from 'react-hook-form';

import Tooltip from '../../../Tooltip';

import {
  createPostFormFields,
  createPostFormSchema,
} from '../../../../utils/schema/createPostSchema';
import { CategorySelect } from '../../../form/CategorySelect';
import { SubmitButton } from '../../../form/SubmitButton';
import TextField from '../../../form/TextField';
import HelpIcon from '../../../icons/HelpIcon';
import SaveIcon from '../../../icons/SaveIcon';
import SendIcon from '../../../icons/SendIcon';

interface CreatePostFormProps {
  handleSubmit: (data: createPostFormFields) => void | Promise<void>;
  initialValues?: Partial<createPostFormFields>;
  editMode?: boolean;
}

export const CreatePostForm = ({ handleSubmit, initialValues, editMode }: CreatePostFormProps) => {
  const methods = useForm<createPostFormFields>({
    resolver: yupResolver(createPostFormSchema),
    defaultValues: { ...initialValues, categories: initialValues?.categories || [] },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(handleSubmit)}>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            required
            name='content'
            size='small'
            label='Message'
            multiline
            rows={4}
            autoComplete={'off'}
          />
          <TextField
            name='link'
            size='small'
            label='Link'
            placeholder='https://example.com/'
            autoComplete={'off'}
            InputProps={{
              endAdornment: (
                <Tooltip title='Add a link to a website such as an article or blog post that relates to your post'>
                  <HelpIcon sx={{ ml: 1 }} />
                </Tooltip>
              ),
            }}
          />
          <CategorySelect name='categories' label='Categories' allowCreate />
          <SubmitButton
            color='primary'
            variant='contained'
            size='large'
            endIcon={editMode ? <SaveIcon /> : <SendIcon />}
          >
            {editMode ? 'Save' : 'Create Post'}
          </SubmitButton>
        </Stack>
      </form>
    </FormProvider>
  );
};
