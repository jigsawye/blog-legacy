import React from 'react';

import GlobalStyle from '../styles/GlobalStyle';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const Template = ({ children, site }) => (
  <>
    <GlobalStyle />
    <Head siteMetadata={site.siteMetadata} />
    <Header />
    {children}
    <Footer />
  </>
);

export default Template;
