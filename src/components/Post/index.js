import styled from 'styled-components';
import Link from 'gatsby-link';

export const PostWrapper = styled.div`
  border-bottom: 1px solid rgb(234, 234, 234);
  padding: 50px 0px 40px;
  transition: background 200ms;

  &:first-of-type {
    border-top: 1px solid rgb(234, 234, 234);
  }

  &::last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background: rgb(250, 250, 250);
  }
`;

export const ArchiveWrapper = styled.div`
  border-bottom: 1px solid rgb(234, 234, 234);
  padding: 30px 0px;

  &::last-of-type {
    border-bottom: 0;
  }

  &:hover {
    background: rgb(250, 250, 250);
  }
`;

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

export const ArticleContent = styled.div`
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  margin: 30px 0 15px;

  p {
    margin-bottom: 20px;
  }

  a {
    color: rgb(6, 125, 247);
    font-size: inherit;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    font-size: 18px;
  }

  strong {
    font-weight: 600;
  }

  blockquote {
    border-left: 5px solid;
    margin: 0;
    padding-left: 10px;
  }

  ul {
    list-style-type: none;
    margin-left: 15px;
    padding: 0px;

    li {
      font-size: 14px;
      line-height: 24px;
      margin-bottom: 10px;

      ul {
        margin-top: 10px;
      }

      :before {
        content: '-';
        display: inline-block;
        color: rgb(153, 153, 153);
        position: absolute;
        margin-left: -15px;
      }
    }
  }

  code[class*='language-text'] {
    color: rgb(189, 16, 224);
    font-family: Menlo, Monaco, 'Lucida Console', 'Liberation Mono',
      'DejaVu Sans Mono', 'Bitstream Vera Sans Mono', 'Courier New', monospace,
      serif;
    font-size: 0.9em;
    white-space: pre-wrap;

    :before {
      content: '\`';
    }

    :after {
      content: '\`';
    }
  }
`;
