const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  const PostTemplate = path.resolve('./src/templates/post.js');

  const result = await graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
            }
          }
        }
      }
    }
  `);

  if (result.errors) {
    console.error(result.errors);
    throw Error(result.errors);
  }

  const posts = result.data.allMarkdownRemark.edges;

  posts.forEach(post =>
    createPage({
      path: post.node.fields.slug,
      component: PostTemplate,
      context: {
        slug: post.node.fields.slug,
      },
    })
  );
};

const POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)/;

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const filePath = createFilePath({ node, getNode });

    const [, year, month, day, filename] = POST_FILENAME_REGEX.exec(filePath);
    const slug = `/${year}/${month}/${day}/${filename}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};
