import styled from 'utils/styles';

interface HeaderProps {
  image: string;
}

export const Header = styled.header<HeaderProps>`
  height: 150px;
  width: 100%;
  padding: 15px;
  background-size: cover;
  background-image: ${(props) => `url(${props.image})`};
`;

export const Title = styled.p`
  text-transform: uppercase;
  margin: 0;
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.texts};
  box-sizing: border-box;
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 0.5rem;
  text-decoration: none;
`;
