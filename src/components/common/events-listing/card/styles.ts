import styled from 'utils/styles';

export const Container = styled.article`
  min-width: 300px;
  max-width: 300px;
  margin: 10px;
  display: block;
  transition: 0.25s;
  height: fit-content;

  :hover {
    transform: translateY(0.5rem);
  }
`;
