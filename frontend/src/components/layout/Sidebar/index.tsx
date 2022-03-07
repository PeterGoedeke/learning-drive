import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
  SvgIcon,
  Toolbar,
  Typography,
} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import { SIDEBAR_WIDTH } from '../../../utils/constants';
import GlobeIcon from '../../icons/GlobeIcon';
import ListIcon from '../../icons/ListIcon';
import UserIcon from '../../icons/UserIcon';

interface SidebarItemProps {
  Icon: typeof SvgIcon;
  page: string;
  matchSubPages?: boolean;
  location: string;
  children: string;
  to: string;
}

const SidebarItem = ({ Icon, location, page, children, to }: SidebarItemProps) => (
  <ListItem
    disablePadding
    component={NavLink}
    sx={{ color: 'white', bgcolor: location === page ? 'action.selected' : undefined }}
    to={to}
  >
    <ListItemButton>
      <ListItemIcon>
        <Icon sx={{ color: location === page ? 'secondary.main' : undefined }} />
      </ListItemIcon>
      <ListItemText primary={children} />
    </ListItemButton>
  </ListItem>
);

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
    <Box
      sx={{
        minWidth: SIDEBAR_WIDTH,
        position: 'sticky',
        top: 0,
        height: 'min-content',
      }}
    >
      <Stack component={Toolbar} direction='row'>
        <Typography variant='h4' component='h1' gutterBottom>
          Lorem
        </Typography>
      </Stack>
      <Stack>
        <List disablePadding>
          <SidebarItem to='/' Icon={GlobeIcon} location={page} page='global'>
            Global Feed
          </SidebarItem>
          <SidebarItem to='/activity' Icon={ListIcon} location={page} page='activity'>
            Activity Feed
          </SidebarItem>
          <SidebarItem to='/account' Icon={UserIcon} location={page} page='account'>
            My Account
          </SidebarItem>
        </List>
      </Stack>
    </Box>
  );
};
