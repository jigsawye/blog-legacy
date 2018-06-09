import React from 'react';
import Helmet from 'react-helmet';

import {
  PostWrapper,
  DateWrapper,
  TitleLink,
  ArticleContent,
  ReadMoreLink,
} from '../components/Post';
import Container from '../components/common/Container';
import formatDate from '../utils/formatDate';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Helmet title={`HOME · ${data.site.siteMetadata.title}`} />
      {posts.map(({ node }) => {
        const { fields, frontmatter, html } = node;
        const { title, date } = frontmatter;
        const __html = html.split('<!-- more -->')[0];

        return (
          <PostWrapper key={fields.slug}>
            <Container>
              <DateWrapper>{formatDate(date)}</DateWrapper>
              <TitleLink to={fields.slug}>{title}</TitleLink>

              <ArticleContent dangerouslySetInnerHTML={{ __html }} />

              <ReadMoreLink to={fields.slug}>READ MORE</ReadMoreLink>
            </Container>
          </PostWrapper>
        );
      })}
    </div>
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
