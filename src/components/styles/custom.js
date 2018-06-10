import { css } from 'styled-components';

export default css`
  body {
    font-family: Arial, sans-serif, 'Helvetica Neue', 'PingFeng TC', '微軟正黑體'
    text-rendering: optimizeLegibility;
  }

  ::selection {
    background-color: #79ffe1;
    color: #000;
  }

  code, pre {
    font-family: Monaco, courier, monospace, 'Roboto Mono';
  }
`;
