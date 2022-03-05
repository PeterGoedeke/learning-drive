import { Autocomplete, Box, Chip, FormHelperText, TextField } from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';

interface CategorySelectProps {
  name: string;
  label?: string;
  placeholder?: string;
}

export const CategorySelect = ({ name, label, placeholder }: CategorySelectProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const error = errors[name];

  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <Autocomplete
            multiple
            disabled={isSubmitting}
            onChange={(e, v) => onChange(v)}
            value={value || []}
            {...field}
            options={categories}
            getOptionLabel={(option) => option.text}
            renderTags={(value, getTagProps) =>
              value.map((option, index) => (
                <Chip
                  {...getTagProps({ index })}
                  key={option.key}
                  label={option.text}
                  size='small'
                  color='primary'
                />
              ))
            }
            defaultValue={[]}
            renderInput={(params) => (
              <TextField
                {...params}
                variant='outlined'
                size='small'
                label={label}
                placeholder={placeholder}
                error={Boolean(error)}
              />
            )}
          />
        )}
      />
      {error && <FormHelperText error>{error?.message}</FormHelperText>}
    </Box>
  );
};

const categories = [
  { key: 'ai', text: 'AI' },
  { key: 'css', text: 'CSS' },
  { key: 'html', text: 'HTML' },
];
