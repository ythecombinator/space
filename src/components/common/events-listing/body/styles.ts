import styled from 'utils/styles';

export const Container = styled.div`
  padding: 15px;
  width: 100%;
  white-space: normal;
`;

export const Date = styled.p`
  font-weight: 600;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Content = styled.p`
  padding-bottom: 1rem;
  line-height: 1.8;
`;

export const Title = styled.a`
  display: block;
  cursor: pointer;
  font-size: 1.5rem;
  margin-block: 1rem;
  margin-inline: 0px;
  font-weight: bold;
  text-decoration: none;
`;
