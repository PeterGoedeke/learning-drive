import { createTheme } from '@mui/material/styles';

import baseTheme from './baseTheme';

const darkTheme = createTheme(baseTheme, {
  palette: {
    mode: 'dark',
    primary: {
      light: '#BB87E4',
      main: '#8959B2',
      dark: '#592D82',
    },
    secondary: {
      light: '#FFEE53',
      main: '#FFBC11',
      dark: '#C78C00',
    },
    error: {
      light: '#EC636C',
      main: '#B53141',
      dark: '#7F001B',
      contrastText: '#fff',
    },
    warning: {
      light: '#FFAA5A',
      main: '#DB7A2B',
      dark: '#A44D00',
      contrastText: '#fff',
    },
    info: {
      light: '#5AA8D2',
      main: '#1B79A1',
      dark: '#004D72',
      contrastText: '#fff',
    },
    success: {
      light: '#8CC566',
      main: '#4CAF50',
      dark: '#2C6608',
      contrastText: '#fff',
    },
    text: {
      primary: '#E7E5E0',
      secondary: '#C5C0C1',
      disabled: '#7D7482',
    },
    background: {
      paper: '#3C2E48',
      default: '#271933',
    },
    action: {
      active: 'rgba(255, 255, 255, 0.32)',
      hover: 'rgba(255, 255, 255, 0.04)',
      hoverOpacity: 0.04,
      selected: 'rgba(255, 255, 255, 0.16)',
      selectedOpacity: 0.16,
      disabled: 'rgba(0, 0, 0, 0.16)',
      disabledBackground: 'rgba(0,0,0, 0.12)',
      disabledOpacity: 0.28,
      focus: 'rgba(0,0,0, 0.12)',
      focusOpacity: 0.12,
      activatedOpacity: 0.32,
    },
    divider: '#544066',
  },
});

export default darkTheme;
