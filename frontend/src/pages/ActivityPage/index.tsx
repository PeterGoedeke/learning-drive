import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Fab,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { useDialog } from 'react-dialog-async';

import CreatePostDialog from '../../components/dialog/CreatePostDialog';
import { PostFeed } from '../../components/feed/PostFeed';
import PlusIcon from '../../components/icons/PlusIcon';
import SearchIcon from '../../components/icons/SearchIcon';
import WriteIcon from '../../components/icons/WriteIcon';
import { Page } from '../../components/layout/Page';

const ActivityPage = () => {
  const createPostDialog = useDialog(CreatePostDialog);

  const handleCreatePost = async () => {
    await createPostDialog.show({});
  };

  return (
    <Page
      title='Activity Feed'
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
      <Card elevation={0} sx={{ m: 2 }}>
        <CardActionArea onClick={handleCreatePost}>
          <CardContent>
            <Stack direction='row' spacing={2}>
              <WriteIcon color='secondary' />
              <Typography color='text.secondary'>Write a post</Typography>
            </Stack>
          </CardContent>
        </CardActionArea>
      </Card>
      <Divider />
      <PostFeed />
    </Page>
  );
};

export default ActivityPage;
