import {
  BottomNavigation,
  BottomNavigationAction,
} from '@mui/material';
import { NavLink, useLocation } from 'react-router-dom';

import GlobeIcon from '../../icons/GlobeIcon';
import ListIcon from '../../icons/ListIcon';
import UserIcon from '../../icons/UserIcon';

export const Navbar = () => {
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
      <BottomNavigation showLabels value={page}>
        <BottomNavigationAction
          component={NavLink}
          value='global'
          label='Global'
          to='/'
          icon={<GlobeIcon sx={{color: page === 'global' ? 'secondary.main' : undefined}}/>}
        />
        <BottomNavigationAction
          component={NavLink}
          value='activity'
          label='Activity'
          to='/activity'
          icon={<ListIcon sx={{color: page === 'activity' ? 'secondary.main' : undefined}}/>}
        />
        <BottomNavigationAction
          component={NavLink}
          value={'account'}
          label={'Account'}
          icon={<UserIcon sx={{color: page === 'account' ? 'secondary.main' : undefined}}/>}
          to='/account'
        />
      </BottomNavigation>
  )};