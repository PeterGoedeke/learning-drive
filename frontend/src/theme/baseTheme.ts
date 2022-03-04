import { createTheme } from '@mui/material/styles';
import './font.css';

const BODY_FONT = "'Rubik', sans-serif";
const HEADING_FONT = "'Nunito', sans-serif";

const baseTheme = createTheme({
  typography: {
    fontFamily: BODY_FONT,
    h1: {
      fontFamily: HEADING_FONT,
    },
    h2: {
      fontFamily: HEADING_FONT,
    },
    h3: {
      fontFamily: HEADING_FONT,
    },
    h4: {
      fontFamily: HEADING_FONT,
    },
    h5: {
      fontFamily: HEADING_FONT,
    },
    h6: {
      fontFamily: HEADING_FONT,
    },
  },
  shadows: [
    'none',
    '0px 10px 25px rgba(19, 12, 24, 0.1),0px 2px 15px rgba(19, 12, 24, 0),0px 2px 20px rgba(19, 12, 24, 0)',
    '0px 10.1px 25.3px rgba(19, 12, 24, 0),0px 2.2px 14.8px rgba(19, 12, 24, 0),0px 2px 20.3px rgba(19, 12, 24, 0.1)',
    '0px 10.2px 25.7px rgba(19, 12, 24, 0),0px 2.3px 14.6px rgba(19, 12, 24, 0.1),0px 2px 20.7px rgba(19, 12, 24, 0.1)',
    '0px 10.3px 26px rgba(19, 12, 24, 0),0px 2.5px 14.3px rgba(19, 12, 24, 0.1),0px 2px 21px rgba(19, 12, 24, 0.1)',
    '0px 10.3px 26.4px rgba(19, 12, 24, 0),0px 2.7px 14.1px rgba(19, 12, 24, 0.1),0px 2px 21.4px rgba(19, 12, 24, 0.1)',
    '0px 10.4px 26.7px rgba(19, 12, 24, 0),0px 2.9px 13.9px rgba(19, 12, 24, 0.1),0px 2.1px 21.7px rgba(19, 12, 24, 0.1)',
    '0px 10.5px 27.1px rgba(19, 12, 24, -0.1),0px 3px 13.7px rgba(19, 12, 24, 0.1),0px 2.1px 22.1px rgba(19, 12, 24, 0.2)',
    '0px 10.6px 27.4px rgba(19, 12, 24, -0.1),0px 3.2px 13.5px rgba(19, 12, 24, 0.2),0px 2.1px 22.4px rgba(19, 12, 24, 0.2)',
    '0px 10.7px 27.8px rgba(19, 12, 24, -0.1),0px 3.4px 13.3px rgba(19, 12, 24, 0.2),0px 2.1px 22.8px rgba(19, 12, 24, 0.2)',
    '0px 10.8px 28.1px rgba(19, 12, 24, -0.1),0px 3.6px 13px rgba(19, 12, 24, 0.2),0px 2.1px 23.1px rgba(19, 12, 24, 0.2)',
    '0px 10.9px 28.5px rgba(19, 12, 24, -0.2),0px 3.7px 12.8px rgba(19, 12, 24, 0.2),0px 2.1px 23.5px rgba(19, 12, 24, 0.2)',
    '0px 11px 28.8px rgba(19, 12, 24, -0.2),0px 3.9px 12.6px rgba(19, 12, 24, 0.2),0px 2.1px 23.8px rgba(19, 12, 24, 0.2)',
    '0px 11px 29.2px rgba(19, 12, 24, -0.2),0px 4.1px 12.4px rgba(19, 12, 24, 0.3),0px 2.1px 24.2px rgba(19, 12, 24, 0.3)',
    '0px 11.1px 29.5px rgba(19, 12, 24, -0.2),0px 4.3px 12.2px rgba(19, 12, 24, 0.3),0px 2.1px 24.5px rgba(19, 12, 24, 0.3)',
    '0px 11.2px 29.9px rgba(19, 12, 24, -0.2),0px 4.4px 12px rgba(19, 12, 24, 0.3),0px 2.2px 24.9px rgba(19, 12, 24, 0.3)',
    '0px 11.3px 30.2px rgba(19, 12, 24, -0.3),0px 4.6px 11.7px rgba(19, 12, 24, 0.3),0px 2.2px 25.2px rgba(19, 12, 24, 0.3)',
    '0px 11.4px 30.6px rgba(19, 12, 24, -0.3),0px 4.8px 11.5px rgba(19, 12, 24, 0.3),0px 2.2px 25.6px rgba(19, 12, 24, 0.3)',
    '0px 11.5px 30.9px rgba(19, 12, 24, -0.3),0px 5px 11.3px rgba(19, 12, 24, 0.4),0px 2.2px 25.9px rgba(19, 12, 24, 0.4)',
    '0px 11.6px 31.3px rgba(19, 12, 24, -0.3),0px 5.1px 11.1px rgba(19, 12, 24, 0.4),0px 2.2px 26.3px rgba(19, 12, 24, 0.4)',
    '0px 11.7px 31.6px rgba(19, 12, 24, -0.4),0px 5.3px 10.9px rgba(19, 12, 24, 0.4),0px 2.2px 26.6px rgba(19, 12, 24, 0.4)',
    '0px 11.7px 32px rgba(19, 12, 24, -0.4),0px 5.5px 10.7px rgba(19, 12, 24, 0.4),0px 2.2px 27px rgba(19, 12, 24, 0.4)',
    '0px 11.8px 32.3px rgba(19, 12, 24, -0.4),0px 5.7px 10.4px rgba(19, 12, 24, 0.4),0px 2.2px 27.3px rgba(19, 12, 24, 0.4)',
    '0px 11.9px 32.7px rgba(19, 12, 24, -0.4),0px 5.8px 10.2px rgba(19, 12, 24, 0.5),0px 2.2px 27.7px rgba(19, 12, 24, 0.5)',
    '0px 12px 33px rgba(19, 12, 24, -0.4),0px 6px 10px rgba(19, 12, 24, 0.5),0px 2.3px 28px rgba(19, 12, 24, 0.5)',
  ],
});

export default baseTheme;
