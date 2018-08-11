import React, { Fragment } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import injectGlobal from '../components/styles/injectGlobal';

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
