import { Avatar, CardHeader, Stack, Typography, Chip, styled, IconButton } from '@mui/material';
import format from 'date-fns/format';
import { useState } from 'react';

import Tooltip from '../Tooltip';
import { HeartButton } from './HeartButton';
import { PostLink } from './PostLink';

import { Post as PostData } from '../../api/client';
import { PAGE_MARGIN } from '../../utils/constants';
import { dateFormats } from '../../utils/dateFormats';
import EditIcon from '../icons/EditIcon';

export interface PostProps {
  // Data about the post
  data: PostData;
  // The id of the authenticated user
  userId: string;

  onEdit?: (data: PostData) => void;
}

export const Post = ({ data, userId, onEdit }: PostProps) => {
  const [liked, setLiked] = useState(data.reactions.isPersonallyLiked);

  const isOwner = data.user._id === userId;

  return (
    <Stack component='article' sx={{ px: PAGE_MARGIN, py: 1 }}>
      <CardHeader
        sx={{ px: 0, pt: 0 }}
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
              <IconButton
                sx={{ color: 'white', mt: 1, mr: 1 }}
                size='small'
                onClick={() => onEdit && onEdit(data)}
              >
                <EditIcon fontSize='inherit' />
              </IconButton>
            </Tooltip>
          )
        }
      />
      <Typography sx={{ whiteSpace: 'pre-wrap' }}>{data.content}</Typography>
      {data.resource && (
        <PostLink
          url={data.resource.link}
          imageUrl={data.resource.openGraph?.imageUrl}
          title={data.resource.openGraph?.title}
        />
      )}
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
