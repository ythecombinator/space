import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Index';

import Link from 'gatsby-link';

import image from 'assets/404.jpg';

import {Styled404} from './styles';

const PageWrapper: FunctionComponent = () => (
  <Layout>
    <Styled404>
      <p>Yikes! You shouldn't be here! 😬</p>
      <img src={image} />
      <Link to="/">
        <p>Click here to safely go 🏠.</p>
      </Link>
    </Styled404>
  </Layout>
);

export default PageWrapper;
