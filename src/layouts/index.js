import React from 'react';

import '../assets/scss/apollo.scss';

import Header from '../components/Header';
import Footer from '../components/Footer';

import Head from './Head';

class Template extends React.Component {
  render() {
    return (
      <div className="wrap">
        <Head />
        <Header />
        <section className="container">{this.props.children()}</section>
        <Footer />
      </div>
    );
  }
}

export default Template;
