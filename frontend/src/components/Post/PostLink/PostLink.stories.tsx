import { Container } from '@mui/material';
import { Meta, Story } from '@storybook/react';

import { PostLink, PostLinkProps } from '.';

export default {
  component: PostLink,
  title: 'Components/PostLink',
  parameters: { layout: 'centered' },
} as Meta;

interface PostLinkStoryProps extends PostLinkProps {}

const Template: Story<PostLinkStoryProps> = (args) => (
  <Container maxWidth='xs'>
    <PostLink {...args} />
  </Container>
);

export const Default = Template.bind({});
Default.args = {
  url: 'https://css-tricks.com/css-cascade-layers/',
  title: 'A Complete Guide to CSS Cascade Layers',
  imageUrl: 'https://css-tricks.com/wp-json/social-image-generator/v1/image/363766',
};

export const TallImage = Template.bind({});
TallImage.args = {
  url: 'https://css-tricks.com/css-cascade-layers/',
  title: 'A Complete Guide to CSS Cascade Layers',
  imageUrl:
    'https://images.unsplash.com/photo-1587410131477-f01b22c59e1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dGFsbCUyMHRvd2VyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
};

export const NoImage = Template.bind({});
NoImage.args = {
  url: 'https://css-tricks.com/css-cascade-layers/',
  title: 'A Complete Guide to CSS Cascade Layers',
  imageUrl: 'invalid-url.no',
};
