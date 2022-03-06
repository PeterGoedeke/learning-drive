import { useState } from 'react';
import { useDialog } from 'react-dialog-async';

import SearchPostsDialog from '../components/dialog/SearchPostsDialog';

import { postsSearchFilter } from '../utils/schema/searchPostsSchema';

export const useSearch = () => {
  const [search, setSearch] = useState<postsSearchFilter>({});
  const searchPostsDialog = useDialog(SearchPostsDialog);

  const handleSearch = async () => {
    const searchQuery = await searchPostsDialog.show({
      initialValues: {
        content: search.searchQuery,
        categories: search.searchCategories?.map((c) => ({ text: c, key: c.toLowerCase() })),
      },
    });

    if (searchQuery) setSearch(searchQuery);
  };

  return {
    search,
    refineSearch: handleSearch,
  };
};
