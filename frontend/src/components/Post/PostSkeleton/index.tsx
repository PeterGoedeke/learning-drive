import { CardHeader, Skeleton, Stack, Typography } from '@mui/material';

import { PAGE_MARGIN } from '../../../utils/constants';

interface PostSkeletonProps {}

export const PostSkeleton = (props: PostSkeletonProps) => (
  <Stack sx={{ p: PAGE_MARGIN }}>
    <CardHeader
      sx={{ px: 0, pt: 0 }}
      avatar={<Skeleton variant='circular' height={40} width={40} />}
      title={
        <Stack spacing={2} direction='row' alignItems='center'>
          <Typography component='span'>
            <Skeleton width={180} />
          </Typography>
          <Typography component='span' color='text.secondary' variant='caption'>
            <Skeleton width={100} />
          </Typography>
        </Stack>
      }
      subheader={
        <Stack direction='row' spacing={1}>
          <Skeleton variant='rectangular' width={60} height={18} sx={{ borderRadius: 999 }} />
          <Skeleton variant='rectangular' width={80} height={18} sx={{ borderRadius: 999 }} />
        </Stack>
      }
    />
    <Typography sx={{ whiteSpace: 'pre-wrap' }}>
      <Skeleton width={'100%'} />
      <Skeleton width={'90%'} />
      <Skeleton width={'30%'} />
    </Typography>
    {/* {data.resource && (
      <PostLink
      url={data.resource.link}
      imageUrl={data.resource.openGraph?.imageUrl}
      title={data.resource.openGraph?.title}
      />
    )} */}
    <Stack direction='row' alignItems='center' spacing={2} sx={{ mb: 2 }}>
      <Skeleton width={20} />
      <Skeleton width={20} />
    </Stack>
  </Stack>
);
