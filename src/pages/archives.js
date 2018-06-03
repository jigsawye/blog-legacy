import React, { Fragment } from 'react';
import Link from 'gatsby-link';
import Helmet from 'react-helmet';
import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import reverse from 'lodash/reverse';

import formatDate from '../utils/formatDate';

const ArchivesPage = ({ data }) => {
  const yearPosts = reverse(
    map(
      groupBy(data.allMarkdownRemark.edges, post =>
        new Date(post.node.frontmatter.date).getFullYear()
      ),
      (posts, year) => ({ posts, year })
    )
  );

  return (
    <div className="archive">
      <Helmet title={`ARCHIVES · ${data.site.siteMetadata.title}`} />
      {map(yearPosts, ({ posts, year }) => (
        <div key={year}>
          <h2 className="archive-year">{year}</h2>
          {posts.map(({ node: { frontmatter, fields } }) => (
            <div className="post-item" key={fields.slug}>
              <div className="post-info">{formatDate(frontmatter.date)}</div>
              <Link className="post-title-link" to={fields.slug}>
                {frontmatter.title}
              </Link>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ArchivesPage;

export const pageQuery = graphql`
  query ArchivesPageQuery {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
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
