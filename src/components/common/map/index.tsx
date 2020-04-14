import React, {FunctionComponent} from 'react';

import {
  ComposableMap,
  Geographies,
  GeographiesProps,
  Geography,
  ZoomableGroup,
} from 'react-simple-maps';
import {jsx, useColorMode} from 'theme-ui';

import * as Styled from './styles';
import {getStylesForLocation} from './utils';

interface Props {
  map: GeographiesProps["geography"];
  data: string[];
}

const Map: FunctionComponent<Props> = (props) => {
  const { map, data } = props;

  const [colorMode] = useColorMode();

  return (
    <Styled.Container>
      <ComposableMap>
        <ZoomableGroup disablePanning>
          <Geographies geography={map}>
            {(geographies, projection) =>
              geographies.map((geography, i) => {
                const styles = getStylesForLocation(
                  (geography as any).properties.name,
                  data,
                  colorMode
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
    </Styled.Container>
  );
};

export default Map;
