import styled from 'src/utils/styles';

export const Button = styled.a`
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
