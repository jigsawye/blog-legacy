import React, { Fragment } from 'react';

import Container from '../components/common/Container';
import formatDate from '../utils/formatDate';
import {
  ArticleContent,
  ArticleWrapper,
  DateWrapper,
  ReadMoreLink,
  TitleLink,
} from '../components/Article';

const HomePage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <Fragment>
      {posts.map(({ node }) => {
        const { fields, frontmatter, html } = node;
        const { title, date } = frontmatter;
        const __html = html.split('<!-- more -->')[0];

        return (
          <ArticleWrapper key={fields.slug}>
            <Container>
              <DateWrapper>{formatDate(date)}</DateWrapper>
              <TitleLink to={fields.slug}>{title}</TitleLink>

              <ArticleContent dangerouslySetInnerHTML={{ __html }} />

              <ReadMoreLink to={fields.slug}>READ MORE</ReadMoreLink>
            </Container>
          </ArticleWrapper>
        );
      })}
    </Fragment>
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
            date
            title
          }
        }
      }
    }
  }
`;
