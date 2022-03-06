import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Fab,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useDialog } from 'react-dialog-async';

import CreatePostDialog from '../../components/dialog/CreatePostDialog';
import { EndOfFeed } from '../../components/feed/EndOfFeed';
import PlusIcon from '../../components/icons/PlusIcon';
import SadBoxIcon from '../../components/icons/SadBoxIcon';
import SearchIcon from '../../components/icons/SearchIcon';
import WriteIcon from '../../components/icons/WriteIcon';
import { Page } from '../../components/layout/Page';
import { PageDivider } from '../../components/layout/Page/PageDivider';
import { Post } from '../../components/Post';
import { PostSkeleton } from '../../components/Post/PostSkeleton';
import { post1, post2 } from '../../components/Post/testData';

const GlobalPage = () => {
  const createPostDialog = useDialog(CreatePostDialog);
  const handleCreatePost = async () => {
    await createPostDialog.show({});
  };

  return (
    <Page
      title='Global Feed'
      action={
        <IconButton color='secondary'>
          <SearchIcon />
        </IconButton>
      }
      bottomActions={
        <>
          <Box sx={{ flexGrow: 1 }} />
          <Fab onClick={handleCreatePost} color='primary'>
            <PlusIcon />
          </Fab>
        </>
      }
    >
      <Card elevation={0} sx={{ my: 2 }}>
        <CardActionArea onClick={handleCreatePost}>
          <CardContent>
            <Stack direction='row' spacing={2}>
              <WriteIcon color='secondary' />
              <Typography color='text.secondary'>Write a post</Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <PageDivider />
      <Post data={post1} userId='123' />
      <PageDivider />
      <Post data={post2} userId='124' />
      <PageDivider />
      <PostSkeleton />
      <PageDivider />
      <PostSkeleton />
      <PageDivider />
      <PostSkeleton />
      <PageDivider />
      <EndOfFeed />
    </Page>
  );
};

export default GlobalPage;
