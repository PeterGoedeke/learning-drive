import {
  Autocomplete,
  Box,
  Chip,
  createFilterOptions,
  FormHelperText,
  TextField,
} from '@mui/material';
import { Controller, useFormContext } from 'react-hook-form';
import useSWR from 'swr';

import { queryKey } from '../../../utils/queryKeys';

export interface CategorySelectProps {
  name: string;
  label?: string;
  placeholder?: string;
}

type Category = {
  key: string;
  text: string;
  new?: boolean;
};

const filter = createFilterOptions<Category>();

export const CategorySelect = ({ name, label, placeholder }: CategorySelectProps) => {
  const {
    control,
    formState: { errors, isSubmitting },
  } = useFormContext();

  const error = errors[name];

  const query = useSWR(queryKey.CATEGORIES, async () => TEMP_CATEGORIES);

  const handleCreateNewCategory = (value: string) => {
    const category: Category = { key: value.toLowerCase(), text: value };
    query.mutate([...(query?.data || []), category], false);
  };

  return (
    <Box>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, ...field } }) => (
          <Autocomplete<Category, true>
            multiple
            selectOnFocus
            clearOnBlur
            handleHomeEndKeys
            autoHighlight
            disabled={isSubmitting}
            loading={Boolean(query.error)}
            loadingText={'❌ Failed to load categories'}
            isOptionEqualToValue={(option, value) => option.key === value.key}
            onChange={(e, v, reason, option) => {
              if (option?.option.new) {
                handleCreateNewCategory(option.option.text);
              }
              onChange(v);
            }}
            value={value || []}
            {...field}
            filterOptions={(options, params) => {
              const filteredOpts = filter(options, params);

              const { inputValue } = params;
              // Suggest the creation of a new value
              const isExisting = options.some((option) => inputValue.toLowerCase() === option.key);

              if (inputValue !== '' && !isExisting) {
                // Add a new option to the list
                filteredOpts.push({
                  key: inputValue.toLowerCase(),
                  text: inputValue,
                  new: true,
                });
              }

              return filteredOpts;
            }}
            options={query.data || []}
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

const TEMP_CATEGORIES = [
  { key: 'ai', text: 'AI' },
  { key: 'css', text: 'CSS' },
  { key: 'html', text: 'HTML' },
];
