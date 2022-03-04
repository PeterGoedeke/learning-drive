import { Container } from '@mui/material';
import { Meta, Story } from '@storybook/react';
import { BrowserRouter } from 'react-router-dom';

import { Post, PostProps } from '.';

import { post1, post2 } from './testData';

export default {
  component: Post,
  title: 'Components/Post',
  parameters: { layout: 'centered' },
} as Meta;

interface PostStoryProps extends PostProps {}

const Template: Story<PostStoryProps> = (args) => (
  <BrowserRouter>
    <Container maxWidth='md'>
      <Post {...args} />
    </Container>
  </BrowserRouter>
);

export const Default = Template.bind({});
Default.args = { data: post1 };

export const WithLink = Template.bind({});
WithLink.args = { data: post2 };

export const AsOwner = Template.bind({});
AsOwner.args = { data: post2, userId: 123 };
