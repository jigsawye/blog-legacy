import React from 'react';
import Helmet from 'react-helmet';

import PostTitleSection from '../components/Post/PostTitleSection';
import { ArticleContent, Separaotr } from '../components/Post';
import Container from '../components/common/Container';
import Disqus from '../components/Disqus';

const PostTemplate = ({ data }) => {
  const {
    title: siteTitle,
    disqusShortname: shortname,
    siteUrl,
  } = data.site.siteMetadata;
  const { frontmatter, fields, html } = data.markdownRemark;

  return (
    <div>
      <Helmet title={`${frontmatter.title} | ${siteTitle}`} />
      <PostTitleSection title={frontmatter.title} date={frontmatter.date} />
      <Separaotr />
      <Container>
        <ArticleContent dangerouslySetInnerHTML={{ __html: html }} />
      </Container>
      <Disqus
        shortname={shortname}
        siteUrl={siteUrl}
        slug={fields.slug}
        title={frontmatter.title}
      />
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
        siteUrl
        disqusShortname
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      fields {
        slug
      }
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;
