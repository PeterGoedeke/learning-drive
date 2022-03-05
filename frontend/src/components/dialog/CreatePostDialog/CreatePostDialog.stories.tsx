import { Button, Container, IconButton } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { DialogProvider, useDialog } from 'react-dialog-async';
import { BrowserRouter } from 'react-router-dom';

import CreatePostDialog, { CreatePostDialogProps } from '.';
import { CreatePostForm } from './CreatePostForm';

import SearchIcon from '../../icons/SearchIcon';

export default {
  component: CreatePostDialog,
  title: 'Components/CreatePostDialog',
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <DialogProvider>
        <Story />
      </DialogProvider>
    ),
  ],
} as Meta;

interface CreatePostDialogStoryProps extends CreatePostDialogProps {}

const Template: Story<CreatePostDialogStoryProps> = (args) => {
  const createPostDialog = useDialog(CreatePostDialog);

  return (
    <Button color='secondary' variant='contained' onClick={() => createPostDialog.show({})}>
      Show Dialog
    </Button>
  );
};

export const Default = Template.bind({});

const FormTemplate: Story<CreatePostDialogStoryProps> = (args) => (
  <Container maxWidth='md'>
    <CreatePostForm handleSubmit={() => {}} />
  </Container>
);

export const FormOnly = FormTemplate.bind({ parameters: { layout: 'fullscreen' } });
