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
});

export default baseTheme;
