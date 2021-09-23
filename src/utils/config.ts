import {DeepRequired} from 'utility-types';

const variables = {
  blogApiUrl: process.env.GATSBY_BLOG_API_URL,
};

const config = { variables: variables as DeepRequired<typeof variables> };

export default config;
