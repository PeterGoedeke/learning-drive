import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import { SIDEBAR_WIDTH } from '../../../utils/constants';
import GlobeIcon from '../../icons/GlobeIcon';
import ListIcon from '../../icons/ListIcon';
import UserIcon from '../../icons/UserIcon';

export const Sidebar = () => {
  const { pathname } = useLocation();
  let page = '';
  if (pathname === '/') {
    page = 'global';
  } else if (pathname.startsWith('/activity')) {
    page = 'activity';
  } else if (pathname.startsWith('/account')) {
    page = 'account';
  }

  return (
    <Drawer
      sx={{
        width: SIDEBAR_WIDTH,
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDEBAR_WIDTH },
      }}
      variant='permanent'
      anchor='left'
    >
      <Stack component={Toolbar} direction='row' justifyContent='center'>
        <Typography variant='h4' component='h1' gutterBottom>
          Lorem Ipsum
        </Typography>
      </Stack>
      <Divider />
      <Stack sx={{ pl: '1vh' }}>
        <List>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/'>
            <ListItemButton>
              <GlobeIcon sx={{ color: page === 'global' ? 'secondary.main' : undefined }} />
              <ListItemText primary='Global Feed' sx={{ pl: '0.7vh' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/activity'>
            <ListItemButton>
              <ListIcon sx={{ color: page === 'activity' ? 'secondary.main' : undefined }} />
              <ListItemText primary='Activity Feed' sx={{ pl: '0.7vh' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/account'>
            <ListItemButton>
              <UserIcon sx={{ color: page === 'account' ? 'secondary.main' : undefined }} />
              <ListItemText primary='My Account' sx={{ pl: '0.7vh' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  );
};
