import React from 'react';
import styled from 'styled-components';
import { DiscussionEmbed } from 'disqus-react';

import Container from '../common/Container';

const CommentWrapper = styled.div`
  margin: 40px 0 20px;
`;

const Disqus = ({ shortname, siteUrl, slug, title }) => (
  <Container>
    <CommentWrapper>
      <DiscussionEmbed
        shortname={shortname}
        config={{
          url: `${siteUrl}${slug}`,
          identifier: slug,
          title,
        }}
      />
    </CommentWrapper>
  </Container>
);

export default Disqus;
