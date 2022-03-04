import { Avatar, CardHeader, Stack, Typography, Chip, styled, IconButton } from '@mui/material';
import format from 'date-fns/format';
import { useState } from 'react';

import Tooltip from '../Tooltip';
import { HeartButton } from './HeartButton';
import { PostLink } from './PostLink';

import { Post as PostData } from '../../api/client';
import { dateFormats } from '../../utils/dateFormats';
import EditIcon from '../icons/EditIcon';

export interface PostProps {
  // Data about the post
  data: PostData;
  // The id of the authenticated user
  userId: number;
}

export const Post = ({ data, userId }: PostProps) => {
  const [liked, setLiked] = useState(false);

  const isOwner = data.user._id === userId;

  return (
    <Stack component='article'>
      <CardHeader
        sx={{ px: 0 }}
        avatar={<Avatar src={data.user.imageUrl} />}
        title={
          <div>
            <Typography component='span'>{data.user.name} • </Typography>
            <Typography component='span' color='text.secondary' variant='caption'>
              {format(new Date(data.timestampCreated), dateFormats.post)}
            </Typography>
          </div>
        }
        subheader={
          <Stack direction='row' spacing={1}>
            {data.categories.map((category) => (
              <CategoryChip key={category} label={category} size='small' color='primary' />
            ))}
          </Stack>
        }
        action={
          isOwner && (
            <Tooltip title='Edit Post'>
              <IconButton sx={{ color: 'white', mt: 1, mr: 1 }} size='small'>
                <EditIcon fontSize='inherit' />
              </IconButton>
            </Tooltip>
          )
        }
      />
      <Typography sx={{ whiteSpace: 'pre-wrap' }}>{data.content}</Typography>
      {data.resource && <PostLink url={data.resource} />}
      <Stack direction='row' alignItems='center'>
        <Tooltip title={liked ? 'Unlike Post' : 'Like Post'}>
          <HeartButton color='secondary' filled={liked} onClick={() => setLiked((l) => !l)} />
        </Tooltip>
        <Typography
          variant='caption'
          color={liked ? 'secondary' : 'text.secondary'}
          sx={{ mt: 0.25 }}
        >
          {data.reactions.likes + (liked ? 1 : 0)}
        </Typography>
      </Stack>
    </Stack>
  );
};

const CategoryChip = styled(Chip)(() => ({
  height: 20,
}));
