import React from 'react';
import styled from 'styled-components';

import Copyright from './Copyright';

const FooterWrapper = styled.footer`
  background: #fafafa;
  border-top: 1px solid #eaeaea;
  left: 0;
  right: 0;
  position: absolute;
`;

const Footer = () => (
  <FooterWrapper>
    <Copyright />
  </FooterWrapper>
);

export default Footer;
