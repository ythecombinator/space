module.exports = {
  siteMetadata: {
    title: 'ythecombinator',
    description: 'full-stack engineer focused on client-side architecture • into Swift & node.js'
  },
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'posts'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/talks`,
        name: 'talks'
      }
    },    
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet'
  ]
}
