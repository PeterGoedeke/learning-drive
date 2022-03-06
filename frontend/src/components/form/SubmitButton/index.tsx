import { LoadingButtonProps, LoadingButton } from '@mui/lab';
import { useFormContext } from 'react-hook-form';

export const SubmitButton = ({ loading, ...other }: Omit<LoadingButtonProps, 'type'>) => {
  const {
    formState: { isSubmitting },
  } = useFormContext();

  return <LoadingButton type='submit' {...other} loading={isSubmitting || loading} />;
};
