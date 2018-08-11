import React from 'react';
import { graphql } from 'gatsby';

import Container from '../components/common/Container';
import Layout from '../components/layout';
import formatDate from '../utils/formatDate';
import {
  ArticleContent,
  ArticleWrapper,
  DateWrapper,
  ReadMoreLink,
  TitleLink,
} from '../components/Article';

const HomePage = ({ data }) => {
  const {
    allMarkdownRemark: { edges: posts },
    site,
  } = data;

  return (
    <Layout site={site}>
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
    </Layout>
  );
};

export default HomePage;

export const pageQuery = graphql`
  query IndexQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
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
