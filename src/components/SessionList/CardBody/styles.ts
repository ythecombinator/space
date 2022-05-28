import styled from 'utils/styles';

export const Container = styled.div`
  padding: 15px;
  width: 100%;
  white-space: normal;
`;

export const Date = styled.p`
  font-weight: 600;
  margin: 0.1rem;
  color: ${(props) => props.theme.colors.secondary};
`;

export const Content = styled.div`
  display: flex;
  padding-bottom: 1rem;
  line-height: 1.8;
`;

export const Info = styled.p`
  border: 3px solid ${(props) => props.theme.colors.secondary};
  margin-right: 1rem;
  padding: 0.5rem;
`;

export const Title = styled.a`
  display: block;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
`;
