import { Dialog, DialogContent, Grow } from '@mui/material';
import { useSnackbar } from 'notistack';
import { AsyncDialogProps } from 'react-dialog-async';

import { DialogHeader } from '../DialogHeader';
import { CreatePostForm } from './CreatePostForm';

import { postsApi } from '../../../api';
import { CreatePost } from '../../../api/client';
import { useIsDesktop } from '../../../hooks/useIsDesktop';
import { createPostFormFields } from '../../../utils/schema/createPostSchema';

export interface CreatePostDialogProps {
  initialValues?: Partial<createPostFormFields>;
  editMode?: boolean;
}

const CreatePostDialog = ({ open, handleClose, data }: AsyncDialogProps<CreatePostDialogProps>) => {
  const { enqueueSnackbar } = useSnackbar();
  const isDesktop = useIsDesktop();

  const handleSubmit = async ({ content, link, categories }: createPostFormFields) => {
    const request: CreatePost = {
      content,
      resource: link === '' ? undefined : link,
      categories: categories.map(({ text }) => text),
    };

    try {
      await postsApi.createPost(request);
      enqueueSnackbar(data.editMode ? 'Post updated' : 'Post created', { variant: 'success' });
      handleClose();
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' });
    }
  };

  return (
    <Dialog
      PaperProps={{ elevation: 0 }}
      TransitionComponent={Grow}
      open={open}
      onClose={() => handleClose()}
      fullWidth
      fullScreen={!isDesktop}
      maxWidth='sm'
    >
      <DialogHeader onClose={() => handleClose()}>
        {data.editMode ? 'Edit Post' : 'Create Post'}
      </DialogHeader>
      <DialogContent>
        <CreatePostForm
          editMode={data.editMode}
          handleSubmit={handleSubmit}
          initialValues={data.initialValues}
        />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
