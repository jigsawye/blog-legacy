import React, { Fragment } from 'react';

import injectGlobal from '../styles/injectGlobal';

import Footer from './Footer';
import Head from './Head';
import Header from './Header';

injectGlobal();

const Template = ({ children, site }) => (
  <Fragment>
    <Head siteMetadata={site.siteMetadata} />
    <Header />
    {children}
    <Footer />
  </Fragment>
);

export default Template;
