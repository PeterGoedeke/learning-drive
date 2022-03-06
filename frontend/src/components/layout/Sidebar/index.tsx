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
import { SetStateAction, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { SIDEBAR_WIDTH } from '../../../utils/constants';
import GlobeIcon from '../../icons/GlobeIcon';
import ListIcon from '../../icons/ListIcon';
import UserIcon from '../../icons/UserIcon';

export const Sidebar = () => {
  const { pathname } = useLocation();
  let page = '';
  if(pathname === '/'){
    page = 'global';
  } else if (pathname.startsWith('activity')) {
    page = 'activity';
  } else if (pathname.startsWith('account')){
    page = 'account';
  }
  
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleListItemClick = (event: any, index: SetStateAction<number>) => {
    setSelectedIndex(index);
  };

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
            <ListItemButton
              selected={selectedIndex === 0}
              onClick={(e) => handleListItemClick(e, 0)}
            >
              <GlobeIcon sx={{color: selectedIndex === 0 ? 'secondary.main':undefined }}/>
              <ListItemText primary='Global Feed' sx={{ pl: '0.7vh' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/activity'>
            <ListItemButton
              selected={selectedIndex === 1}
              onClick={(e) => handleListItemClick(e, 1)}
            >
              <ListIcon sx={{color: selectedIndex === 1 ? 'secondary.main':undefined }}/>
              <ListItemText primary='Activity Feed' sx={{ pl: '0.7vh' }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/account'>
            <ListItemButton
              selected={selectedIndex === 2}
              onClick={(e) => handleListItemClick(e, 2)}
            >
              <UserIcon sx={{color: selectedIndex === 2 ? 'secondary.main':undefined }}/>
              <ListItemText primary='My Account' sx={{ pl: '0.7vh' }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Stack>
    </Drawer>
  );
};
