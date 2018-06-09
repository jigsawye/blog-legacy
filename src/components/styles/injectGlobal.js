import { injectGlobal } from 'styled-components';

import normalize from './normalize';
import custom from './custom';

// eslint-disable-next-line no-unused-expressions
export default () => injectGlobal`
  ${normalize};

  ${custom};
`;
