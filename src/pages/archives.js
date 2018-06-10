import React, { Fragment } from 'react';
import Helmet from 'react-helmet';

import { TitleLink, DateWrapper } from '../components/Article';
import { ArchivesWrapper } from '../components/Archives';
import { TitleSection, Container } from '../components/common';
import formatDate from '../utils/formatDate';

const ArchivesPage = ({ data }) => (
  <Fragment>
    <Helmet title={`ARCHIVES · ${data.site.siteMetadata.title}`} />
    <TitleSection>Archives</TitleSection>
    {data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields } }) => (
      <ArchivesWrapper key={fields.slug}>
        <Container key={fields.slug}>
          <DateWrapper>{formatDate(frontmatter.date)}</DateWrapper>
          <TitleLink to={fields.slug}>{frontmatter.title}</TitleLink>
        </Container>
      </ArchivesWrapper>
    ))}
  </Fragment>
);

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
