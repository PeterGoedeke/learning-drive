import { Card, CardContent, Container, Stack, Typography } from "@mui/material";

const LoginPage = () => <Container maxWidth='sm' sx={{ mt: 8 }}>
    <Card>
      <CardContent>
        <Stack alignItems='center'>
        <Typography variant='h4' component='h1' gutterBottom>
            Login
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  </Container>;

export default LoginPage;