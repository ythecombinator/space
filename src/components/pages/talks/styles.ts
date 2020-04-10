import GatsbyLink from 'gatsby-link';
import styled from 'styled-components';

interface ItemProps {
  image: string;
}

export const Container = styled.div`
  margin-left: calc(-1rem - 8px);
  margin-right: calc(-1rem - 8px);
`;

export const Collection = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
`;

export const Item = styled.div<ItemProps>`
  width: 33.33%;
  height: 250px;
  background-image: ${(props) => `url(${props.image})`};
  background-position: 50% 50%;
  background-size: cover;
  position: relative;
`;

export const Content = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: rgba(91, 115, 125, 0.8);
  -webkit-transition: opacity 250ms ease-out;
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
  color: white;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 0.7rem;
  letter-spacing: 1px;
  border: 2px solid rgba(255, 255, 255, 0.25);
  padding: 10px 25px;
  :hover {
    background: white;
    color: black;
    text-decoration: none;
  }
`;
