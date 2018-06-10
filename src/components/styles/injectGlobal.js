import { injectGlobal } from 'styled-components';

import normalize from './normalize';
import custom from './custom';
import prism from './prism';

export default () => injectGlobal`
  ${normalize};
  ${prism};
  ${custom};
`;
