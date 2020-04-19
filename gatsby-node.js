const fs = require(`fs`);
const kebabCase = require(`lodash.kebabcase`);
const mkdirp = require(`mkdirp`);
const path = require(`path`);
const { getConfig } = require(`./utils/config`);

const config = getConfig();

exports.onCreateWebpackConfig = function ({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        assets: path.resolve(__dirname, "src/assets"),
        components: path.resolve(__dirname, "src/components"),
        hooks: path.resolve(__dirname, "src/hooks"),
        model: path.resolve(__dirname, "src/model"),
        styles: path.resolve(__dirname, "src/styles"),
        sections: path.resolve(__dirname, "src/sections"),
        utils: path.resolve(__dirname, "src/utils"),
      },
    },
  });
};

// Ensure that content directories exist at site-level
// If non-existent they'll be created here (as empty folders)
exports.onPreBootstrap = ({ reporter, store }) => {
  const { program } = store.getState();

  const { postsContentPath, pagesContentPath, talksContentPath } = config;

  const dirs = [
    path.join(program.directory, postsContentPath),
    path.join(program.directory, talksContentPath),
    path.join(program.directory, pagesContentPath),
  ];

  dirs.forEach((dir) => {
    if (!fs.existsSync(dir)) {
      reporter.info(`Initializing "${dir}" directory`);
      mkdirp.sync(dir);
    }
  });
};

const mdxResolverPassthrough = (fieldName) => async (
  source,
  args,
  context,
  info
) => {
  const type = info.schema.getType(`Mdx`);
  const mdxNode = context.nodeModel.getNodeById({
    id: source.parent,
  });
  const resolver = type.getFields()[fieldName].resolve;
  const result = await resolver(mdxNode, args, context, {
    fieldName,
  });
  return result;
};

// Create general interfaces that you could can use to leverage other data sources
// The core theme sets up MDX as a type for the general interface
exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes, createFieldExtension } = actions;

  const { basePath } = config;

  const slugify = (source) => {
    const slug = source.slug ? source.slug : kebabCase(source.title);

    return `/${basePath}/${slug}`.replace(/\/\/+/g, `/`);
  };

  createFieldExtension({
    name: `slugify`,
    extend() {
      return {
        resolve: slugify,
      };
    },
  });

  createFieldExtension({
    name: `mdxpassthrough`,
    args: {
      fieldName: `String!`,
    },
    extend({ fieldName }) {
      return {
        resolve: mdxResolverPassthrough(fieldName),
      };
    },
  });

  createTypes(`
    interface Post @nodeInterface {
      id: ID!
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 160): String!
      body: String!
      html: String
      timeToRead: Int!
      tags: [PostTag]
      banner: File @fileByRelativePath
      description: String
    }

    interface Talk @nodeInterface {
      id: ID!
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 160): String!
      body: String!
      html: String
      timeToRead: Int!
      banner: File @fileByRelativePath
      description: String
    }
    
    type PostTag {
      name: String
      slug: String
    }
    
    interface Page @nodeInterface {
      id: ID!
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 160): String!
      body: String!
    }
    
    type MdxPost implements Node & Post {
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
      html: String! @mdxpassthrough(fieldName: "html")
      timeToRead: Int! @mdxpassthrough(fieldName: "timeToRead")
      tags: [PostTag]
      banner: File @fileByRelativePath
      description: String
    }

    type MdxTalk implements Node & Talk {
      slug: String! @slugify
      title: String!
      date: Date! @dateformat
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
      html: String! @mdxpassthrough(fieldName: "html")
      timeToRead: Int! @mdxpassthrough(fieldName: "timeToRead")
      banner: File @fileByRelativePath
      description: String
    }
    
    type MdxPage implements Node & Page {
      slug: String!
      title: String!
      excerpt(pruneLength: Int = 140): String! @mdxpassthrough(fieldName: "excerpt")
      body: String! @mdxpassthrough(fieldName: "body")
    }
    
    type Config implements Node {
      basePath: String
      postsPath: String
      talksPath: String
      postsContentPath: String
      talksContentPath: String
      pagesContentPath: String
      tagsPath: String
      externalLinks: [ExternalLink]
      navigation: [NavigationEntry]
      showLineNumbers: Boolean
    }
    
    type ExternalLink {
      name: String!
      url: String!
    }
    
    type NavigationEntry {
      title: String!
      slug: String!
    }
  `);
};

exports.sourceNodes = ({ actions, createContentDigest }) => {
  const { createNode } = actions;

  createNode({
    ...config,
    id: `config`,
    parent: null,
    children: [],
    internal: {
      type: `Config`,
      contentDigest: createContentDigest(config),
      content: JSON.stringify(config),
      description: `Options for useConfig hook.`,
    },
  });
};

exports.onCreateNode = ({
  node,
  actions,
  getNode,
  createNodeId,
  createContentDigest,
}) => {
  const { createNode, createParentChildLink } = actions;

  const { postsContentPath, talksContentPath, pagesContentPath } = config;

  // Make sure that it's an MDX node
  if (node.internal.type !== `Mdx`) {
    return;
  }

  // Create a source field
  // And grab the sourceInstanceName to differentiate the different sources
  // In this case "postsContentPath", "talksContentPath" and "pagesContentPath"
  const fileNode = getNode(node.parent);
  const source = fileNode.sourceInstanceName;

  // Check for "posts" and create the "Post" type
  if (node.internal.type === `Mdx` && source === postsContentPath) {
    let modifiedTags;

    if (node.frontmatter.tags) {
      modifiedTags = node.frontmatter.tags.map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }));
    } else {
      modifiedTags = null;
    }

    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: modifiedTags,
      banner: node.frontmatter.banner,
      description: node.frontmatter.description,
    };

    const mdxPostId = createNodeId(`${node.id} >>> MdxPost`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPostId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPost`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Post interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxPostId) });
  }

  if (node.internal.type === `Mdx` && source === talksContentPath) {
    let modifiedTags;

    if (node.frontmatter.tags) {
      modifiedTags = node.frontmatter.tags.map((tag) => ({
        name: tag,
        slug: kebabCase(tag),
      }));
    } else {
      modifiedTags = null;
    }

    const fieldData = {
      slug: node.frontmatter.slug ? node.frontmatter.slug : undefined,
      title: node.frontmatter.title,
      date: node.frontmatter.date,
      tags: modifiedTags,
      banner: node.frontmatter.banner,
      description: node.frontmatter.description,
    };

    const mdxTalkId = createNodeId(`${node.id} >>> MdxTalk`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxTalkId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxTalk`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Post interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxTalkId) });
  }

  // Check for "pages" and create the "Page" type
  if (node.internal.type === `Mdx` && source === pagesContentPath) {
    const fieldData = {
      title: node.frontmatter.title,
      slug: node.frontmatter.slug,
    };

    const mdxPageId = createNodeId(`${node.id} >>> MdxPage`);

    createNode({
      ...fieldData,
      // Required fields
      id: mdxPageId,
      parent: node.id,
      children: [],
      internal: {
        type: `MdxPage`,
        contentDigest: createContentDigest(fieldData),
        content: JSON.stringify(fieldData),
        description: `Mdx implementation of the Page interface`,
      },
    });

    createParentChildLink({ parent: node, child: getNode(mdxPageId) });
  }
};

// These template are only data-fetching wrappers that import components
const homepageTemplate = require.resolve(`./src/templates/homepage-query.tsx`);
const postsTemplate = require.resolve(`./src/templates/posts-query.tsx`);
const talksTemplate = require.resolve(`./src/templates/talks-query.tsx`);
const postTemplate = require.resolve(`./src/templates/post-query.tsx`);
const talkTemplate = require.resolve(`./src/templates/talk-query.tsx`);
const pageTemplate = require.resolve(`./src/templates/page-query.tsx`);
const tagTemplate = require.resolve(`./src/templates/tag-query.tsx`);
const tagsTemplate = require.resolve(`./src/templates/tags-query.tsx`);

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const { basePath, postsPath, talksPath, tagsPath, formatString } = config;

  createPage({
    path: basePath,
    component: homepageTemplate,
    context: {
      formatString,
    },
  });

  createPage({
    path: `/${basePath}/${postsPath}`.replace(/\/\/+/g, `/`),
    component: postsTemplate,
    context: {
      formatString,
    },
  });

  createPage({
    path: `/${basePath}/${talksPath}`.replace(/\/\/+/g, `/`),
    component: talksTemplate,
    context: {
      formatString,
    },
  });

  createPage({
    path: `/${basePath}/${tagsPath}`.replace(/\/\/+/g, `/`),
    component: tagsTemplate,
  });

  const result = await graphql(`
    query {
      allPost(sort: { fields: date, order: DESC }) {
        nodes {
          slug
        }
      }
      allTalk(sort: { fields: date, order: DESC }) {
        nodes {
          slug
        }
      }
      allPage {
        nodes {
          slug
        }
      }
      tags: allPost(sort: { fields: tags___name, order: DESC }) {
        group(field: tags___name) {
          fieldValue
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts or pages`,
      result.errors
    );
    return;
  }

  const posts = result.data.allPost.nodes;

  posts.forEach((post) => {
    createPage({
      path: post.slug,
      component: postTemplate,
      context: {
        slug: post.slug,
        formatString,
      },
    });
  });

  const talks = result.data.allTalk.nodes;

  talks.forEach((talk) => {
    createPage({
      path: talk.slug,
      component: talkTemplate,
      context: {
        slug: talk.slug,
        formatString,
      },
    });
  });

  const pages = result.data.allPage.nodes;

  if (pages.length > 0) {
    pages.forEach((page) => {
      createPage({
        path: `/${basePath}/${page.slug}`.replace(/\/\/+/g, `/`),
        component: pageTemplate,
        context: {
          slug: page.slug,
        },
      });
    });
  }

  const tags = result.data.tags.group;

  if (tags.length > 0) {
    tags.forEach((tag) => {
      createPage({
        path: `/${basePath}/${tagsPath}/${kebabCase(tag.fieldValue)}`.replace(
          /\/\/+/g,
          `/`
        ),
        component: tagTemplate,
        context: {
          slug: kebabCase(tag.fieldValue),
          name: tag.fieldValue,
          formatString,
        },
      });
    });
  }
};
