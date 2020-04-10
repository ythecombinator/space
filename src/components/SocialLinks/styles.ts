import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 45px;
  margin-left: -13px;

  a {
    border: 0 !important;
    margin-right: 20px;
    display: inline-block;
    width: 48px;
    height: 48px;
    line-height: 48px;
    font-size: 32px;
    text-align: center;
  }

  a:hover {
    border: 0 !important;
  }

  i {
    color: #aaa;
    transition: transform 250ms ease, color 250ms linear;
    transform: scale(0.7);
  }

  a:hover i {
    color: #3d8;
    transition: transform 100ms ease;
    transform: scale(1);
  }

  a,
  ol,
  p,
  ul {
    transition: all 250ms ease;
  }
`;
