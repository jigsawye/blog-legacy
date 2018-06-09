import { css } from 'styled-components';

export default css`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
      Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    text-rendering: optimizeLegibility;
  }

  ::selection {
    background-color: #79ffe1;
    color: #000;
  }

  .gatsby-highlight {
    font-size: 14px;
    background-color: #fff;
    border-width: 1px;
    border-style: solid;
    border-color: rgb(234, 234, 234);
    border-image: initial;
    margin: 40px 0px;
    padding: 20px;
    overflow: auto;
  }

  .gatsby-highlight pre[class*='language-'] {
    background-color: transparent;
    margin: 0;
    padding: 0;
    overflow: initial;
    float: left; /* 1 */
    min-width: 100%; /* 2 */
  }
`;
