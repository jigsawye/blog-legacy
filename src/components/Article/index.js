import Link from 'gatsby-link';
import styled from 'styled-components';

export { default as ArticleTitleSection } from './ArticleTitleSection';
export { default as ArticleContent } from './ArticleContent';
export { default as ArticleWrapper } from './ArticleWrapper';

export const DateWrapper = styled.div`
  margin-top: 0px;
  color: rgb(153, 153, 153);
  font-size: 12px;
`;

export const TitleLink = styled(Link)`
  display: block;
  text-decoration: none;
  color: rgb(0, 0, 0);
  font-size: 24px;
  margin-top: 20px;
  margin-bottom: 0px;
  text-align: left;

  &:hover {
    text-decoration: underline;
  }
`;

export const ReadMoreLink = styled(Link)`
  font-size: 12px;
  color: rgb(0, 0, 0);
  text-transform: uppercase;
`;
