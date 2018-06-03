import React from 'react';
import Helmet from 'react-helmet';

import formatDate from '../utils/formatDate';

const PostTemplate = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title;
  const { frontmatter, html } = data.markdownRemark;

  return (
    <div className="post">
      <Helmet title={`${frontmatter.title} | ${siteTitle}`} />
      <article className="post-block">
        <h1 className="post-title">{frontmatter.title}</h1>
        <div className="post-info">{formatDate(frontmatter.date)}</div>
        <div
          className="post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </article>
    </div>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
