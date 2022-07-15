import styled from 'utils/styles';

export const Button = styled.a`
  margin: 0.5rem 0;
  display: flex;
  align-items: center;
  border: none;
  box-shadow: none;
  background-color: transparent;
  text-decoration: none;
  transition: 0.25s;

  svg {
    margin-right: 0.3rem;
  }

  &:hover {
    transform: translate(10px, 0);
  }
`;
