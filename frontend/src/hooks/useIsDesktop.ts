import { useMediaQuery, Theme } from '@mui/material';

export const useIsDesktop = () => useMediaQuery<Theme>((theme) => theme.breakpoints.up('md'));
