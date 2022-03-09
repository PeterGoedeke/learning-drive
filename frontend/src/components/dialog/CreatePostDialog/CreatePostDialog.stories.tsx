import { Button, Container } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { SnackbarProvider } from 'notistack';
import { DialogProvider, useDialog } from 'react-dialog-async';

import CreatePostDialog, { CreatePostDialogProps } from '.';
import { CreatePostForm } from './CreatePostForm';

export default {
  component: CreatePostDialog,
  title: 'Components/CreatePostDialog',
  parameters: { layout: 'centered' },
  decorators: [
    (Story) => (
      <SnackbarProvider>
        <DialogProvider>
          <Story />
        </DialogProvider>
      </SnackbarProvider>
    ),
  ],
} as Meta;

interface CreatePostDialogStoryProps extends CreatePostDialogProps {}

const Template: Story<CreatePostDialogStoryProps> = (args) => {
  const createPostDialog = useDialog(CreatePostDialog);

  return (
    <Button color='secondary' variant='contained' onClick={() => createPostDialog.show(args)}>
      Show Dialog
    </Button>
  );
};

export const Default = Template.bind({});
export const Editing = Template.bind({});
Editing.args = {
  postId: 1,
  initialValues: {
    content:
      'Ullamco cupidatat amet sunt aute aute do ipsum nulla proident. Ut laboris consequat culpa Lorem est. Mollit occaecat sunt mollit ipsum non aliquip sit aute tempor laborum aliquip do occaecat aute.',
    link: 'https://google.com',
  },
};

const FormTemplate: Story<CreatePostDialogStoryProps> = (args) => (
  <Container maxWidth='md'>
    <CreatePostForm handleSubmit={() => {}} />
  </Container>
);

export const FormOnly = FormTemplate.bind({ parameters: { layout: 'fullscreen' } });
