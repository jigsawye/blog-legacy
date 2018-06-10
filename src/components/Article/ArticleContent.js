import styled from 'styled-components';

const ArticleContent = styled.div`
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

  code[class*='language-text'],
  code:not([class*='language-']) {
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

export default ArticleContent;
