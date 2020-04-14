const getConfig = () => {
  const basePath = `/`;
  const postsContentPath = `src/content/posts`;
  const pagesContentPath = `src/content/pages`;
  const talksContentPath = `src/content/talks`;
  const postsPath = `/posts`;
  const tagsPath = `/tags`;
  const talksPath = `/talks`;
  const externalLinks = [
    {
      name: `twitter`,
      url: `https://twitter.com/ythecombinator`,
    },
    {
      name: `github`,
      url: `https://github.com/ythecombinator`,
    },
    {
      name: `devto`,
      url: `https://dev.to/ythecombinator`,
    },
    {
      name: `speakerdeck`,
      url: `https://speakerdeck.com/ythecombinator`,
    },
    {
      name: `linkedin`,
      url: `https://www.linkedin.com/in/ythecombinator/`,
    },
    {
      name: `angel.co`,
      url: `https://angel.co/u/ythecombinator`,
    },

    {
      name: `instagram`,
      url: `https://www.instagram.com/ythecombinator`,
    },
  ];
  const navigation = [
    {
      title: `About`,
      slug: `/about`,
    },
    {
      title: `Posts`,
      slug: `/posts`,
    },
    {
      title: `Talks`,
      slug: `/talks`,
    },
    {
      title: `Clients`,
      slug: `/clients`,
    },
    {
      title: `Projects`,
      slug: `/projects`,
    },
  ];
  const showLineNumbers = true;
  const formatString = `DD.MM.YYYY`;

  return {
    basePath,
    postsContentPath,
    pagesContentPath,
    talksContentPath,
    postsPath,
    tagsPath,
    talksPath,
    externalLinks,
    navigation,
    showLineNumbers,
    formatString,
  };
};

module.exports = { getConfig };
