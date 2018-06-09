import React from 'react';
import styled from 'styled-components';

const CopyrightWrapper = styled.div`
  display: flex;
  vertical-align: top;
  justify-content: center;
  padding: 40px 0;
  width: 900px;
  margin: auto;

  p {
    color: #999999;
    text-align: center;
    font-size: 12px;
  }

  a {
    color: #999999;
    text-decoration: none;
    font-size: 12px;
    transition: all 0.2s ease;

    :hover {
      color: #000;
    }
  }

  @media screen and (max-width: 992px) {
    width: 100%;
    padding-right: 30px;
    padding-left: 30px;
  }
`;

const Copyright = () => (
  <CopyrightWrapper>
    <p>
      Copyright © {new Date().getFullYear()}{' '}
      <a href="https://jigsawye.com">Evan Ye</a>, powered by{' '}
      <a
        href="https://www.gatsbyjs.org/"
        rel="noopener noreferrer"
        target="_blank"
      >
        Gatsby
      </a>
      . All rights reserved.
    </p>
  </CopyrightWrapper>
);

export default Copyright;
