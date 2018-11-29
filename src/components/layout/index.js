import React, { Fragment } from 'react';

import GlobalStyle from '../styles/GlobalStyle';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

const Template = ({ children, site }) => (
  <Fragment>
    <GlobalStyle />
    <Head siteMetadata={site.siteMetadata} />
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default Template;
