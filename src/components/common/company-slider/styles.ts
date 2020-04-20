import styled from 'utils/styles';

export const Slider = styled.div`
  margin-top: 2rem;
  margin-bottom: 4rem;
`;

export const Container = styled.div`
  white-space: nowrap;
  overflow: hidden;

  > div {
    display: inline-block;
    padding: 0 2.2rem;
    vertical-align: middle;
    opacity: 0.25;
    outline: none;
    cursor: default;
    transition: opacity 0.2s ease;
  }

  > div:hover {
    opacity: 0.8;
  }

  * img {
    max-width: 150px;
  }
`;
