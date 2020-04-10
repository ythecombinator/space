import React, {FunctionComponent} from 'react';

import {
  ComposableMap,
  Geographies,
  GeographiesProps,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';

import {Geography as GeographyType} from 'model/Geography';

import * as Styled from './styles';
import {getStylesForLocation} from './utils';

interface Props {
  map: GeographiesProps["geography"];
  data: string[];
}

const Map: FunctionComponent<Props> = (props) => {
  const { map, data } = props;
  return (
    <Styled.Map>
      <ComposableMap>
        <ZoomableGroup disablePanning>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map((geography, i) => {
                const styles = getStylesForLocation(
                  (geography as GeographyType).properties.name,
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
                      pressed: styles,
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
    </Styled.Map>
  );
};

export default Map;
