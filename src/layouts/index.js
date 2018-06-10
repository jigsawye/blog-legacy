import React, { Fragment } from 'react';

import injectGlobal from '../components/styles/injectGlobal';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from './Head';

injectGlobal();

const Template = ({ children, data }) => (
  <Fragment>
    <Head siteMetadata={data.site.siteMetadata} />
    <Header />
    {children()}
    <Footer />
  </Fragment>
);

export default Template;

export const query = graphql`
  query LayoutQuery {
    site {
      siteMetadata {
        title
        description
        siteUrl
      }
    }
  }
`;
