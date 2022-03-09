import { DialogTitle, DialogTitleProps, IconButton } from '@mui/material';
import { PropsWithChildren } from 'react';

import ExitIcon from '../../icons/ExitIcon';

interface DialogHeaderProps extends DialogTitleProps {
  onClose: () => void;
}

export const DialogHeader = ({
  children,
  onClose,
  ...other
}: PropsWithChildren<DialogHeaderProps>) => (
  <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
    {children}
    {onClose ? (
      <IconButton
        aria-label='close'
        onClick={onClose}
        sx={{
          position: 'absolute',
          right: 8,
          top: 8,
          color: 'white',
        }}
      >
        <ExitIcon />
      </IconButton>
    ) : null}
  </DialogTitle>
);
