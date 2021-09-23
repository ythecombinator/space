/** @jsx jsx */
import {Suspense} from 'react';

import {ComposableMap, Geographies, Geography} from 'react-simple-maps';
import ReactTooltip from 'react-tooltip';
import {jsx, Styled, useColorMode} from 'theme-ui';

import useMapData from 'hooks/use-map-data';

import Loading from '../loading';
import {getStylesForLocation, hasBeenVisited} from './utils';

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const Map = () => {
  const data = useMapData();
  const [colorMode] = useColorMode();

  return (
    <div>
      <Styled.p>These are some numbers so far:</Styled.p>

      <Styled.ul>
        <Styled.li>
          {data.currentLocation.flag} {` `} I'm currently based in{" "}
          <Styled.b>{data.currentLocation.name}</Styled.b>
        </Styled.li>
        <Styled.li>
          🌎 I've been to {data.citiesCount} cities, in{" "}
          <Styled.b data-tip data-for="collected-flags">
            {data.countries.length} countries
          </Styled.b>
          , in {data.continentsCount} continents
        </Styled.li>
        <Styled.li>
          🗺️ That makes it{" "}
          <Styled.b>{data.worldPercentage}% of the world</Styled.b>
        </Styled.li>
        <Styled.li>
          🤓 This data is synced with my{" "}
          <Styled.a
            href="https://www.polarsteps.com/ythecombinator"
            target="_blank"
          >
            Polarsteps profile
          </Styled.a>
        </Styled.li>
      </Styled.ul>

      <ReactTooltip id="collected-flags">
        <Styled.p>
          Flags collected:{" "}
          {data.countries.map((country) => (
            <span>
              {country.flag} {` `}
            </span>
          ))}
        </Styled.p>
      </ReactTooltip>

      <ComposableMap projectionConfig={{ scale: 200 }}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              const visited = hasBeenVisited(
                geo.properties.ISO_A2,
                data.countries
              );
              const styles = getStylesForLocation(visited, colorMode);

              return (
                <Geography key={geo.rsmKey} geography={geo} style={styles} />
              );
            })
          }
        </Geographies>
      </ComposableMap>
    </div>
  );
};

export default () => {
  return (
    <Suspense fallback={<Loading />}>
      <Map />
    </Suspense>
  );
};
