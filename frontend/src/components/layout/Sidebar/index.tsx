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
import { NavLink } from 'react-router-dom';

import { SIDEBAR_WIDTH } from '../../../utils/constants';
import GlobeIcon from '../../icons/GlobeIcon';
import ListIcon from '../../icons/ListIcon';
import UserIcon from '../../icons/UserIcon';


export const Sidebar = () => (
  <Drawer
    sx={{
      width: SIDEBAR_WIDTH,
      '& .MuiDrawer-paper': { boxSizing: 'border-box', width: SIDEBAR_WIDTH },
    }}
    open={true}
  >
    <Stack component={Toolbar} direction='row' justifyContent='center'>
      <Typography variant='h4' component='h1' gutterBottom>
        Lorem Ipsum
      </Typography>
    </Stack>
    <Divider />
    <Stack>
      <List>
        <ListItem disablePadding component={NavLink} sx={{ color: 'white' }} to='/'>
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
