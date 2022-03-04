import { Avatar, CardHeader, Stack, Typography, Chip, styled } from '@mui/material';
import format from 'date-fns/format';

import { Post as PostData } from '../../api/client';
import { dateFormats } from '../../utils/dateFormats';

export interface PostProps {
  data: PostData;
}

export const Post = ({ data }: PostProps) => (
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
    />
    <Typography sx={{ whiteSpace: 'pre-wrap' }}>{data.content}</Typography>
  </Stack>
);

const CategoryChip = styled(Chip)(() => ({
  height: 20,
}));
