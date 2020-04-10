import React, {FunctionComponent} from 'react';

import Layout from 'layouts/Blog';

import {Markdown} from 'react-showdown';

import Map from 'components/Map';

import {PageProps} from 'model/PageProps';

import {sections} from 'data/about';
import {data as visitedCountries, map} from 'data/map';

import * as Styled from './styles';

const { intro, travelling, working } = sections;

interface Props extends PageProps {}

const PageWrapper: FunctionComponent<Props> = (props) => {
  const { location } = props;
  return (
    <Layout location={location}>
      <Styled.Container>
        <Markdown markup={intro} />
        <Markdown markup={travelling} />
        <Map map={map} data={visitedCountries} />
        <Markdown markup={working} />
      </Styled.Container>
    </Layout>
  );
};

export default PageWrapper;
