const { getConfig } = require(`./utils/config`);

const config = getConfig();

module.exports = {
  siteMetadata: {
    siteTitle: `@ythecombinator`,
    siteTitleAlt: `Matheus Albuquerque`,
    siteHeadline: `Senior Software Engineer, Front-End based in Prague`,
    siteUrl: `https://www.ythecombinator.space`,
    siteDescription: `Software Engineer, Front-End • Consultant • Speaker • Traveler`,
    siteLanguage: `en`,
    siteImage: `/banner.jpg`,
    author: `@ythecombinator`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: config.postsContentPath,
        path: config.postsContentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: config.talksContentPath,
        path: config.talksContentPath,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: config.pagesContentPath,
        path: config.pagesContentPath,
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 960,
              quality: 90,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-theme-ui`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Matheus Albuquerque`,
        short_name: `@ythecombinator`,
        start_url: `/`,
        background_color: `#2D3748`,
        theme_color: `#FFFFFF`,
        display: `standalone`,
        icon: `src/images/icon.png`,
      },
    },
  ].filter(Boolean),
};
