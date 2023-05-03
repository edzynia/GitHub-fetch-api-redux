export const BASE_URL = 'https://api.github.com/repos/';

export const GIT_HUB_URLS = [
  'eslint/eslint',
  'oakwood/front-end-questions',
  'babel/babel',
  'webpack/webpack',
  'storybooks/storybook',
  'facebook/react',
  'reactjs/redux',
  'expressjs/express',
];

export const searchByClick = (id) => BASE_URL + GIT_HUB_URLS[id];
