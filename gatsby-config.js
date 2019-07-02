module.exports = {
  siteMetadata: {
    title: "ythecombinator",
    description:
      "full-stack engineer focused on client-side architecture • into Swift & node.js"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/posts`,
        name: "posts"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/talks`,
        name: "talks"
      }
    },
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1080
            }
          },
          {
            resolve: `gatsby-remark-prismjs`
          }
        ]
      }
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-typescript-checker",
    "gatsby-plugin-styled-components",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: "https://www.ythecombinator.space"
      }
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-58120604-10"
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#5b737d",
        showSpinner: false
      }
    },
    {
      resolve: "gatsby-plugin-google-fonts",
      options: {
        fonts: ["Poppins:300,400,600,700"],
        display: "swap"
      }
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Matheus' Space",
        short_name: "ythecombinator",
        start_url: "/",
        background_color: "#ffffff",
        theme_color: "#5b737d",
        display: "standalone"
      }
    },
    "gatsby-plugin-offline",
    "gatsby-plugin-webpack-bundle-analyzer"
  ]
};
