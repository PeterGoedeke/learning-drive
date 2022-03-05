import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Stack,
  Toolbar,
} from '@mui/material';
import { NavLink } from 'react-router-dom';

import GlobeIcon from '../../icons/GlobeIcon';
import ListIcon from '../../icons/ListIcon';
import UserIcon from '../../icons/UserIcon';

export const Navbar = () => {
  const lol = 0;
  return (
    <Drawer
      sx={{
        width: '100%',
      }}
      variant='permanent'
      anchor='bottom'
    >
      <Stack component={Toolbar} direction='row' justifyContent='center'>
        <List>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/global'>
            <ListItemButton>
              <Stack direction='column' alignItems='center'>
                <GlobeIcon />
                <ListItemText primary='Global Feed' />
              </Stack>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/activity'>
            <ListItemButton>
              <Stack direction='column' alignItems='center'>
                <ListIcon />
                <ListItemText primary='Activity Feed' />
              </Stack>
            </ListItemButton>
          </ListItem>
        </List>
        <List>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/account'>
            <ListItemButton>
              <Stack direction='column' alignItems='center'>
                <UserIcon />
                <ListItemText primary='My Account' />
              </Stack>
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  );
};
