import { Box, SvgIcon, SvgIconProps } from '@mui/material';
import { ComponentStory, Meta, Story } from '@storybook/react';

import ArrowLeftIcon from './ArrowLeftIcon';
import EditIcon from './EditIcon';
import ExitIcon from './ExitIcon';
import GlobeIcon from './GlobeIcon';
import ListIcon from './ListIcon';
import PlusIcon from './PlusIcon';
import SearchIcon from './SearchIcon';
import SendIcon from './SendIcon';
import UserIcon from './UserIcon';
import WriteIcon from './WriteIcon';

export default {
  title: 'Icons',
  component: SvgIcon,
  argTypes: {
    color: {
      options: ['primary', 'secondary', 'warning', 'error', 'info', 'success'],
      control: { type: 'select' },
    },
  },
  parameters: {
    layout: 'centered',
  },
} as Meta;

export const Default: Story<SvgIconProps> = (args) => (
  <Box
    sx={{
      display: 'grid',
      gridTemplateColumns: 'repeat(8, 1fr)',
      '& *': { display: 'block' },
      gap: '8px',
    }}
  >
    <ArrowLeftIcon {...args} />
    <ExitIcon {...args} />
    <EditIcon {...args} />
    <GlobeIcon {...args} />
    <ListIcon {...args} />
    <PlusIcon {...args} />
    <SearchIcon {...args} />
    <SendIcon {...args} />
    <UserIcon {...args} />
    <WriteIcon {...args} />
  </Box>
);

export const ArrowLeft: ComponentStory<typeof ArrowLeftIcon> = (args) => (
  <ArrowLeftIcon {...args} />
);

export const Exit: ComponentStory<typeof ExitIcon> = (args) => <ExitIcon {...args} />;

export const Edit: ComponentStory<typeof EditIcon> = (args) => <EditIcon {...args} />;

export const Globe: ComponentStory<typeof GlobeIcon> = (args) => <GlobeIcon {...args} />;

export const List: ComponentStory<typeof ListIcon> = (args) => <ListIcon {...args} />;

export const Plus: ComponentStory<typeof PlusIcon> = (args) => <PlusIcon {...args} />;

export const Send: ComponentStory<typeof SendIcon> = (args) => <SendIcon {...args} />;

export const User: ComponentStory<typeof UserIcon> = (args) => <UserIcon {...args} />;

export const Write: ComponentStory<typeof WriteIcon> = (args) => <WriteIcon {...args} />;
