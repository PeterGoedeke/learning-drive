import { Dialog, DialogContent, Grow } from '@mui/material';
import { AsyncDialogProps } from 'react-dialog-async';

import { DialogHeader } from '../DialogHeader';
import { SearchPostsForm } from './SearchPostsForm';

import { useIsDesktop } from '../../../hooks/useIsDesktop';
import { postsSearchFilter, searchPostsFormFields } from '../../../utils/schema/searchPostsSchema';

export interface SearchPostsDialogProps {
  initialValues?: Partial<searchPostsFormFields>;
}

const SearchPostsDialog = ({
  open,
  handleClose,
  data,
}: AsyncDialogProps<SearchPostsDialogProps, postsSearchFilter>) => {
  const isDesktop = useIsDesktop();

  const handleSubmit = async ({ content, categories }: searchPostsFormFields) => {
    handleClose({
      searchQuery: content === '' ? undefined : content,
      searchCategories: categories.length > 0 ? categories.map(({ text }) => text) : undefined,
    });
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
      <DialogHeader onClose={() => handleClose()}>Search</DialogHeader>
      <DialogContent>
        <SearchPostsForm handleSubmit={handleSubmit} initialValues={data.initialValues} />
      </DialogContent>
    </Dialog>
  );
};

export default SearchPostsDialog;
