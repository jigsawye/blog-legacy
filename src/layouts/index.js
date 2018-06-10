import React from 'react';

import injectGlobal from '../components/styles/injectGlobal';
import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from './Head';

injectGlobal();

const Template = ({ children }) => (
  <div>
    <Head />
    <Header />
    <section>{children()}</section>
    <Footer />
  </div>
);

export default Template;
