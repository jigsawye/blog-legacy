import React from 'react';

const Copyright = () => (
  <div className="copyright">
    <p>
      © {new Date().getFullYear()} <a href="https://jigsawye.com">Evan Ye</a>,
      powered by
      <a
        href="https://www.gatsbyjs.org/"
        rel="noopener noreferrer"
        target="_blank"
      >
        {' '}
        Gatsbyjs
      </a>{' '}
      and
      <a
        href="https://github.com/pinggod/hexo-theme-apollo"
        rel="noopener noreferrer"
        target="_blank"
      >
        {' '}
        hexo-theme-apollo
      </a>.
    </p>
  </div>
);

export default Copyright;
