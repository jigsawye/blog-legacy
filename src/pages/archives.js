import React from 'react';
import Helmet from 'react-helmet';

import { ArchiveWrapper, TitleLink, DateWrapper } from '../components/Post';
import TitleSection from '../components/common/TitleSection';
import Container from '../components/common/Container';
import formatDate from '../utils/formatDate';

const ArchivesPage = ({ data }) => (
  <div>
    <Helmet title={`ARCHIVES · ${data.site.siteMetadata.title}`} />
    <TitleSection>Archives</TitleSection>
    {data.allMarkdownRemark.edges.map(({ node: { frontmatter, fields } }) => (
      <ArchiveWrapper key={fields.slug}>
        <Container key={fields.slug}>
          <DateWrapper>{formatDate(frontmatter.date)}</DateWrapper>
          <TitleLink to={fields.slug}>{frontmatter.title}</TitleLink>
        </Container>
      </ArchiveWrapper>
    ))}
  </div>
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
