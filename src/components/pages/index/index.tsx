import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Index';

import {Markdown} from 'react-showdown';

import Hero from 'components/Hero';
import Signature from 'components/Signature';
import SocialLinks from 'components/SocialLinks';

import {githubProfilePicture, sections, socialData} from 'data/about';

import * as Styled from './styles';

const PageWrapper: FunctionComponent = () => {
  return (
    <Layout>
      <Styled.Content>
        <Hero source={githubProfilePicture} description="It's me, Matheus!" />
        <Markdown markup={sections.shortIntro} />
        <SocialLinks socialNetworks={socialData} />
        <Signature name="ythecombinator" />
      </Styled.Content>
    </Layout>
  );
};

export default PageWrapper;
