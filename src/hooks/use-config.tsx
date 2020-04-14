import {graphql, useStaticQuery} from 'gatsby';

import {Identifier} from 'model/SocialNetworks';

interface Props {
  config: {
    basePath: string;
    postsPath: string;
    talksPath: string;
    postsContentPath: string;
    talksContentPath: string;
    pagesContentPath: string;
    tagsPath: string;
    externalLinks: {
      name: Identifier;
      url: string;
    }[];
    navigation: {
      title: string;
      slug: string;
    }[];
    showLineNumbers: boolean;
  };
}

const useConfig = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      config {
        basePath
        postsPath
        talksPath
        postsContentPath
        talksContentPath
        pagesContentPath
        tagsPath
        externalLinks {
          name
          url
        }
        navigation {
          title
          slug
        }
        showLineNumbers
      }
    }
  `);

  return data.config;
};

export default useConfig;
