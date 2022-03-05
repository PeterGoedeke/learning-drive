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
        open={true}
      >
        <Stack component={Toolbar} direction='column' justifyContent='center'>
          <List>
            <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/global'>
              <GlobeIcon />
              <ListItemButton>
                <ListItemText primary='Global Feed' />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/activity'>
              <ListIcon />
              <ListItemButton>
                <ListItemText primary='Activity Feed' />
              </ListItemButton>
            </ListItem>
          </List>
          <List>
            <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/account'>
              <UserIcon />
              <ListItemButton>
                <ListItemText primary='My Account' />
              </ListItemButton>
            </ListItem>
          </List>
        </Stack>
      </Drawer>
    );
  };
  