import { Container, Typography } from "@mui/material";
import { FC } from "react";
import { Helmet } from 'react-helmet-async';

import { PAGE_MARGIN } from "../../../utils/constants";

interface PageProps {
    title: string;
}

export const Page: FC<PageProps> = ({ children, title }) => (
    <Container
      sx={{
        flexGrow: 1,
        padding: PAGE_MARGIN,
        overflowX: 'auto',
        maxWidth: '100vw',
      }}
      maxWidth='lg'
    >
      <Helmet>
        <title>{title} | Lorem Ipsum</title>
      </Helmet>
      <Typography variant='h4' component='h1' gutterBottom>
        {title}
      </Typography>
      {children}
    </Container>
  );
