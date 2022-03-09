import { Meta, Story } from '@storybook/react';

import { HeartButton, HeartButtonProps } from '.';

export default {
  component: HeartButton,
  title: 'Components/HeartButton',
  parameters: { layout: 'centered' },
} as Meta;

interface HeartButtonStoryProps extends HeartButtonProps {}

const Template: Story<HeartButtonStoryProps> = (args) => <HeartButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  color: 'secondary',
  size: 'large',
};
