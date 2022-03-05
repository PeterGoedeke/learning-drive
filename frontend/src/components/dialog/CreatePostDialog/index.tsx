import { Dialog, DialogContent, Grow } from '@mui/material';
import { AsyncDialogProps } from 'react-dialog-async';

import { DialogHeader } from '../DialogHeader';
import { CreatePostForm } from './CreatePostForm';

export interface CreatePostDialogProps {}

const CreatePostDialog = ({ open, handleClose }: AsyncDialogProps<CreatePostDialogProps>) => (
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
      <CreatePostForm
        handleSubmit={(data) =>
          new Promise((res) =>
            window.setTimeout(() => {
              console.log(data);
              res();
            }, 1000)
          )
        }
      />
    </DialogContent>
  </Dialog>
);

export default CreatePostDialog;
