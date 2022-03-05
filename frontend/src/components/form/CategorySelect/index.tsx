import { Autocomplete, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface CategorySelectProps {
  name: string;
  label?: string;
  placeholder?: string;
}

export const CategorySelect = ({ name, label, placeholder }: CategorySelectProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <Autocomplete
          multiple
          {...field}
          options={[]}
          defaultValue={[]}
          renderInput={(params) => (
            <TextField {...params} variant='standard' label={label} placeholder={placeholder} />
          )}
        />
      )}
    />
  );
};
