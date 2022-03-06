import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

import FacebookButton from "../../components/buttons/FacebookButton";
import GithubButton from "../../components/buttons/GithubButton";
import GoogleButton from "../../components/buttons/GoogleButton";

const LoginPage = () => <Container maxWidth='sm' sx={{ mt: 8 }}>
    <Card>
      <CardContent>
        <Stack alignItems='center' spacing={2}>
        <Typography variant='h4' component='h1' gutterBottom>
            Login
          </Typography>
          <GoogleButton/>
          <GithubButton/>
          <FacebookButton/>
        </Stack>
      </CardContent>
    </Card>
  </Container>;

export default LoginPage;