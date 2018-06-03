const path = require('path');

const { createFilePath } = require('gatsby-source-filesystem');

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    const PostTemplate = path.resolve('./src/templates/post.js');

    resolve(
      graphql(
        `
          {
            allMarkdownRemark(
              sort: { fields: [frontmatter___date], order: DESC }
              limit: 1000
            ) {
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
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors);
          reject(result.errors);
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
      })
    );
  });
};

const POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)-(.+)/;

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators;

  if (node.internal.type === `MarkdownRemark`) {
    const filePath = createFilePath({ node, getNode });

    const match = POST_FILENAME_REGEX.exec(filePath);
    const [, year, month, day, filename] = match;
    const slug = `/${year}/${month}/${day}/${filename}`;

    createNodeField({
      name: `slug`,
      node,
      value: slug,
    });
  }
};
