import { Post } from '../../api/client';

export const post1: Post = {
  _id: 1,
  user: {
    _id: 123,
    imageUrl: '',
    name: 'Alex Nicholson',
    handle: '@alex2',
  },
  timeLabelCreated: '_',
  timestampCreated: new Date(2021, 5, 3).getTime(),
  timeLabelModified: '_',
  timestampModified: new Date(2021, 5, 3).getTime(),
  categories: ['AI', 'Machine Learning'],
  content: `Consectetur incididunt aliquip officia et ad dolore esse culpa consequat enim fugiat aute esse velit. Mollit id dolore aliquip ad aute aute exercitation laboris in labore duis nostrud non minim.\n\nAute ipsum duis eu excepteur consequat duis ipsum eiusmod excepteur. Esse officia consequat enim exercitation. Minim excepteur mollit non est aliqua qui in qui.`,
  reactions: {
    likes: 3,
  },
};

export const post2: Post = {
  _id: 1,
  user: {
    _id: 123,
    imageUrl: '',
    name: 'Alex Nicholson',
    handle: '@alex2',
  },
  timeLabelCreated: '_',
  timestampCreated: new Date(2021, 5, 3).getTime(),
  timeLabelModified: '_',
  timestampModified: new Date(2021, 5, 3).getTime(),
  categories: ['AI', 'Machine Learning'],
  content: `Consectetur incididunt aliquip officia et ad dolore esse culpa consequat enim fugiat aute esse velit. Mollit id dolore aliquip ad aute aute exercitation laboris in labore duis nostrud non minim.\n\nAute ipsum duis eu excepteur consequat duis ipsum eiusmod excepteur. Esse officia consequat enim exercitation. Minim excepteur mollit non est aliqua qui in qui.`,
  reactions: {
    likes: 3,
  },
  resource: 'https://css-tricks.com/css-cascade-layers/',
};
