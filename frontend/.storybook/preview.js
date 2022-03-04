import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import theme from '../src/theme';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => {
    return (
      <MuiThemeProvider theme={theme()}>
        <CssBaseline />
        <Story />
      </MuiThemeProvider>
    );
  },
];
