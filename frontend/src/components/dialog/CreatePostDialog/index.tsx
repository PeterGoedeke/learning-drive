import { Dialog, DialogContent, Grow } from '@mui/material';
import { AsyncDialogProps } from 'react-dialog-async';

import { DialogHeader } from '../DialogHeader';
import { CreatePostForm } from './CreatePostForm';

import { createPostFormFields } from '../../../utils/schema/createPostSchema';

export interface CreatePostDialogProps {}

const CreatePostDialog = ({ open, handleClose }: AsyncDialogProps<CreatePostDialogProps>) => {
  const handleSubmit = async (data: createPostFormFields) =>
    new Promise<void>((res) =>
      window.setTimeout(() => {
        console.log(data);
        res();
      }, 1000)
    );

  return (
    <Dialog
      PaperProps={{ elevation: 0 }}
      TransitionComponent={Grow}
      open={open}
      onClose={() => handleClose()}
      fullWidth
      maxWidth='sm'
    >
      <DialogHeader onClose={() => handleClose()}>Create Post</DialogHeader>
      <DialogContent>
        <CreatePostForm handleSubmit={handleSubmit} />
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;
