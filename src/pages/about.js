import React from "react";
import styled from "styled-components";
import { Markdown } from "react-showdown";
import { sections } from "../data/about";
import { map, data as visitedCountries } from "../data/map";
import Map from "../components/Map";

import { colors } from "../styles/colors";

const { primary, secondary, tertiary } = colors;
const { intro, travelling, working } = sections;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  h2 {
    color: ${tertiary};
    font-family: source sans pro, sans-serif;
  }
  h3 {
    color: ${secondary};
    font-family: source sans pro, sans-serif;
  }
  p {
    margin: 0;
    color: #333333;
    font-family: source sans pro, sans-serif;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: ${primary};
      text-decoration: none;
    }
  }
  ul {
    font-family: source sans pro, sans-serif;
    margin-top: 0.5rem;
    li {
      color: #333333;
      font-family: source sans pro, sans-serif;
      font-weight: 300;
      font-size: 1rem;
      line-height: 2rem;
      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
      a {
        color: ${primary};
        text-decoration: none;
      }
    }
  }
`;

export default () => (
  <StyledAbout>
    <Markdown markup={intro} />
    <Markdown markup={travelling} />
    <Map map={map} data={visitedCountries} />
    <Markdown markup={working} />
  </StyledAbout>
);
