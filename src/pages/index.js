import React from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';

import formatDate from '../utils/formatDate';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <ul className="home post-list">
      <Helmet title={`HOME · ${data.site.siteMetadata.title}`} />
      {posts.map(({ node }) => {
        const { fields, frontmatter, html } = node;
        const { title, date } = frontmatter;
        const __html = html.split('<!-- more -->')[0];

        return (
          <li className="post-list-item" key={fields.slug}>
            <article className="post-block">
              <h2 className="post-title">
                <Link to={fields.slug} className="post-title-link">
                  {title}
                </Link>
              </h2>

              <div className="post-info">{formatDate(date)}</div>

              <div
                className="post-content"
                dangerouslySetInnerHTML={{ __html }}
              />
              <Link className="read-more" to={fields.slug}>
                ...更多
              </Link>
            </article>
          </li>
        );
      })}
    </ul>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          html
          fields {
            slug
          }
          frontmatter {
            date(formatString: "DD MMMM, YYYY")
            title
          }
        }
      }
    }
  }
`;
