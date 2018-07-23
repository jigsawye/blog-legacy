import React, { Fragment } from 'react';

import OpenGraph from '../components/OpenGraph';
import { ArticleTitleSection, ArticleContent } from '../components/Article';
import Container from '../components/common/Container';
import Disqus from '../components/Disqus';

const PostTemplate = ({ data }) => {
  const {
    title: siteTitle,
    disqusShortname: shortname,
    siteUrl,
  } = data.site.siteMetadata;
  const { frontmatter, fields, html, excerpt } = data.markdownRemark;

  return (
    <Fragment>
      <OpenGraph
        title={`${frontmatter.title} – ${siteTitle}`}
        description={excerpt}
        url={`${siteUrl}${fields.slug}`}
      />

      <ArticleTitleSection title={frontmatter.title} date={frontmatter.date} />

      <Container>
        <ArticleContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>

      <Disqus
        shortname={shortname}
        siteUrl={siteUrl}
        slug={fields.slug}
        title={frontmatter.title}
      />
    </Fragment>
  );
};

export default PostTemplate;

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
        siteUrl
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      excerpt(pruneLength: 140)
      fields {
        slug
      }
      frontmatter {
        title
        date
      }
    }
  }
`;
