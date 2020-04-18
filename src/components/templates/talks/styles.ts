import {tailwind} from '@theme-ui/presets';
import GatsbyLink from 'gatsby-link';

import styled from 'utils/styles';

const { gray } = tailwind.colors;

interface ItemProps {
  image: string;
}

export const flex = {
  alignItems: `center`,
  justifyContent: `space-between`,
  flexFlow: `wrap`,
};

export const a = { variant: `links.secondary` };

export const listing = { mt: [4, 5] };

export const Collection = styled.div`
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  position: relative;
  width: 100vw;
  left: 50%;
  margin-top: 4rem;
  margin-left: -50vw;
  margin-top: 100px;
`;

export const Item = styled.div<ItemProps>`
  filter: grayscale(95%);
  width: 33.33%;
  height: 250px;
  background-image: ${(props) => `url(${props.image})`};
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
  :hover {
    filter: none;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  transition: opacity 250ms ease-out;
  opacity: 0;
  z-index: 15;
  position: absolute;
  top: 0;
  left: 0;
  :hover {
    opacity: 1;
  }
`;

export const Link = styled(GatsbyLink)`
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  padding: 10px 25px;
  text-decoration: none;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.texts};
`;
