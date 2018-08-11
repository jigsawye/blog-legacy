import Helmet from 'react-helmet';
import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import formatDate from '../utils/formatDate';
import { ArchivesWrapper } from '../components/Archives';
import { Container, TitleSection } from '../components/common';
import { DateWrapper, TitleLink } from '../components/Article';

const ArchivesPage = ({
  data: {
    site,
    allMarkdownRemark: { edges: posts },
  },
}) => (
  <Layout site={site}>
    <Helmet title={`ARCHIVES · ${site.siteMetadata.title}`} />
    <TitleSection>Archives</TitleSection>
    {posts.map(({ node: { frontmatter, fields } }) => (
      <ArchivesWrapper key={fields.slug}>
        <Container key={fields.slug}>
          <DateWrapper>{formatDate(frontmatter.date)}</DateWrapper>
          <TitleLink to={fields.slug}>{frontmatter.title}</TitleLink>
        </Container>
      </ArchivesWrapper>
    ))}
  </Layout>
);

export default ArchivesPage;

export const pageQuery = graphql`
  query ArchivesPageQuery {
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
