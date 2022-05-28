import styled from 'src/utils/styles';

export const List = styled.div`
  display: flex;
  width: 100%;
  margin: 0;
  white-space: normal;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    white-space: nowrap;
    margin-top: 0;
  }
`;
