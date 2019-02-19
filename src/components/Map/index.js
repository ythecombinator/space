import React from "react";
import styled from "styled-components";
import {
  ComposableMap,
  ZoomableGroup,
  Geographies,
  Geography
} from "react-simple-maps";

import { colors } from "../../styles/colors";

const { tertiary, map } = colors;

const hasBeenTo = (location, visited) => {
  return visited.includes(location);
};

const getStylesForLocation = (location, data) => {
  const isVisited = hasBeenTo(location, data);
  return isVisited
    ? {
        fill: tertiary,
        stroke: map.stroke,
        strokeWidth: 0.75,
        outline: "none"
      }
    : {
        fill: map.fill,
        stroke: map.stroke,
        strokeWidth: 0.75,
        outline: "none"
      };
};

const StyledMap = styled.div`
  width: 100%;
  max-width: 980px;
  margin: 1rem auto;
  font-family: Roboto, sans-serif;
  display: flex;
  justify-content: center;
`;

const Map = ({ map, data }) => {
  return (
    <StyledMap>
      <ComposableMap>
        <ZoomableGroup disablePanning>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map((geography, i) => {
                const styles = getStylesForLocation(
                  geography.properties.name,
                  data
                );

                return (
                  <Geography
                    key={i}
                    geography={geography}
                    projection={projection}
                    style={{
                      default: styles,
                      hover: styles,
                      pressed: styles
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </StyledMap>
  );
};

export default Map;
