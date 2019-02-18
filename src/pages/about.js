import React from "react";
import styled from "styled-components";
import { Markdown } from "react-showdown";
import { sections } from "../data/about";
import { map, data as visitedCountries } from "../data/map";
import Map from "../components/Map";

import { brightPink, brightCyan, brightBlue } from "../styles/colors";

const { intro, travelling, experience } = sections;

const StyledAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem;
  h2 {
    color: ${brightBlue};
    font-family: "Lato", sans-serif;
  }
  h3 {
    color: ${brightCyan};
    font-family: "Lato", sans-serif;
  }
  p {
    margin: 0;
    color: #333333;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
    a {
      color: ${brightPink};
      text-decoration: none;
    }
  }
  ul {
    font-family: "Lato", sans-serif;
    margin-top: 0.5rem;
    li {
      color: #333333;
      font-family: "Lato", sans-serif;
      font-weight: 400;
      font-size: 1rem;
      line-height: 2rem;
      @media (min-width: 768px) {
        font-size: 1.1rem;
      }
      a {
        color: ${brightPink};
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
    <Markdown markup={experience} />
  </StyledAbout>
);
