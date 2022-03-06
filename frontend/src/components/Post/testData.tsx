import { Post } from '../../api/client';

export const post1: Post = {
  _id: 1,
  user: {
    _id: '1',
    imageUrl: '',
    name: 'Alex Nicholson',
    handle: '@alex2',
  },
  timestampCreated: new Date(2021, 5, 3).getTime(),
  timestampModified: new Date(2021, 5, 3).getTime(),
  categories: ['AI', 'Machine Learning'],
  content: `Consectetur incididunt aliquip officia et ad dolore esse culpa consequat enim fugiat aute esse velit. Mollit id dolore aliquip ad aute aute exercitation laboris in labore duis nostrud non minim.\n\nAute ipsum duis eu excepteur consequat duis ipsum eiusmod excepteur. Esse officia consequat enim exercitation. Minim excepteur mollit non est aliqua qui in qui.`,
  reactions: {
    likes: 3,
    isPersonallyLiked: false,
  },
};

export const post2: Post = {
  _id: 2,
  user: {
    _id: '3',
    imageUrl: '',
    name: 'Alex Nicholson',
    handle: '@alex2',
  },
  timestampCreated: new Date(2021, 5, 3).getTime(),
  timestampModified: new Date(2021, 5, 3).getTime(),
  categories: ['HTML', 'CSS', 'UI/UX'],
  content: `Consectetur incididunt aliquip officia et ad dolore esse culpa consequat enim fugiat aute esse velit. Mollit id dolore aliquip ad aute aute exercitation laboris in labore duis nostrud non minim.`,
  reactions: {
    likes: 3,
    isPersonallyLiked: false,
  },
  resource: {
    link: 'https://css-tricks.com/css-cascade-layers/',
    openGraph: {
      url: 'https://css-tricks.com/css-cascade-layers/',
      title: 'A Complete Guide to CSS Cascade Layers ',
      description:
        'This is your complete guide to CSS cascade layers, a CSS feature that allows us to define explicit contained layers of specificity, so that we have full control over which styles take priority in a project without relying on specificity hacks or !important',
      imageUrl: 'https://css-tricks.com/wp-json/social-image-generator/v1/image/363766',
    },
  },
};

export const post3: Post = {
  _id: 3,
  user: {
    _id: '2',
    imageUrl: '',
    name: 'Alex Nicholson',
    handle: '@alex2',
  },
  timestampCreated: new Date(2021, 5, 3).getTime(),
  timestampModified: new Date(2021, 5, 3).getTime(),
  categories: ['C#', 'Object-oriented'],
  content: `Consectetur incididunt aliquip officia et ad dolore esse culpa consequat enim fugiat aute esse velit. Mollit id dolore aliquip ad aute aute exercitation laboris in labore duis nostrud non minim.`,
  reactions: {
    likes: 12,
    isPersonallyLiked: true,
  },
  resource: {
    link: 'https://css-tricks.com/css-cascade-layers/',
    openGraph: {
      url: 'https://css-tricks.com/css-cascade-layers/',
      title: 'A Complete Guide to CSS Cascade Layers ',
      description:
        'This is your complete guide to CSS cascade layers, a CSS feature that allows us to define explicit contained layers of specificity, so that we have full control over which styles take priority in a project without relying on specificity hacks or !important',
      imageUrl: 'https://css-tricks.com/wp-json/social-image-generator/v1/image/363766',
    },
  },
};
