const path = require("path");

exports.onCreateWebpackConfig = function({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        data: path.resolve(__dirname, "src/data"),
        components: path.resolve(__dirname, "src/components"),
        layouts: path.resolve(__dirname, "src/layouts"),
        model: path.resolve(__dirname, "src/model"),
        pages: path.resolve(__dirname, "src/pages"),
        styles: path.resolve(__dirname, "src/styles"),
        templates: path.resolve(__dirname, "src/templates"),
        utils: path.resolve(__dirname, "src/utils")
      }
    }
  });
};

exports.onCreatePage = async ({ page, actions }) => {
  const { createPage } = actions;

  return new Promise(resolve => {
    if (
      page.path.match(/^\/posts/) ||
      page.path.match(/^\/talks/) ||
      page.path.match(/^\/about/)
    ) {
      createPage(page);
    }

    resolve();
  });
};

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;

  const postTemplate = path.resolve("src/templates/Post/index.tsx");

  return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            html
            id
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors);
    }

    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate,
        layout: "blog"
      });
    });
  });
};
