import { FormHelperText, TextField as MuiTextField, Stack, TextFieldProps } from '@mui/material';
import React, { PropsWithChildren } from 'react';
import { useFormContext } from 'react-hook-form';

const TextField = ({
  disabled,
  name,
  type,
  ...rest
}: PropsWithChildren<TextFieldProps & { name: string }>) => {
  const {
    register,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const error = errors[name];

  return (
    <Stack>
      <MuiTextField
        {...register(name, { valueAsNumber: type === 'number' })}
        type={type}
        error={Boolean(error)}
        disabled={disabled || isSubmitting}
        {...rest}
      />
      <FormHelperText error>{error?.message}</FormHelperText>
    </Stack>
  );
};

export default TextField;
