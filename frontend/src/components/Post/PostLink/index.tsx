import { Box, Card, CardActionArea, CardContent, Typography } from '@mui/material';

import fallback from '../../../assets/image/fallback.jpg';

export interface PostLinkProps {
  url: string;
  imageUrl?: string;
  title?: string;
}

const siteNameRegex = /^(https?:\/\/[^/]*)/i;

export const PostLink = ({ url, title, imageUrl }: PostLinkProps) => {
  const [, sitename] = siteNameRegex.exec(url) || [];

  return (
    <Card sx={{ mt: 2, overflow: 'hidden' }}>
      <CardActionArea
        sx={{
          display: 'flex',
          justifyContent: 'flex-start',
          alignItems: 'stretch',
        }}
        href={url}
        target='_blank'
        rel='noopener noreferrer'
      >
        <Box
          sx={{
            width: 120,
            borderRadius: 1,
            backgroundImage: `url(${imageUrl}), url(${fallback})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <CardContent sx={{ pt: 1 }}>
          <Typography variant='caption' color='text.secondary'>
            {sitename}
          </Typography>
          <Typography variant='body2' sx={{ textOverflow: 'ellipsis' }}>
            {title || url}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
