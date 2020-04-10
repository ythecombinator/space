import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Index';

import Link from 'gatsby-link';

import image from 'assets/404.jpg';

import * as Styled from './styles';

const PageWrapper: FunctionComponent = () => (
  <Layout>
    <Styled.Container>
      <p>Yikes! You shouldn't be here! 😬</p>
      <img src={image} />
      <Link to="/">
        <p>Click here to safely go 🏠.</p>
      </Link>
    </Styled.Container>
  </Layout>
);

export default PageWrapper;
