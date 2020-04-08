import styled from 'styled-components';

import {baseColors, colors} from 'styles/colors';

const { primary, tertiary } = colors;
const { lightGrayishBlue } = baseColors;

export const Text = styled.div`
  font-family: source sans pro, sans-serif;
  margin: 3rem;
  margin-top: 0;
  h2 {
    color: ${tertiary};
  }
  p {
    margin: 0;
    color: #333333;
    font-weight: 300;
    font-size: 1rem;
    line-height: 2rem;
    @media (min-width: 768px) {
      font-size: 1.1rem;
    }
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
  font-family: source sans pro, sans-serif;
  font-weight: 300;
  font-size: 1.1rem;

  @media (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const Card = styled.div`
  width: 100%;
  background-color: ${lightGrayishBlue};
  border-radius: 5px;

  :hover {
    transform: translateY(0.5rem);
  }
`;

export const Top = styled.div`
  background-color: ${primary};
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  height: 10px;
`;

export const Main = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  font-size: 14px;
  padding: 12px;
`;

export const IconContainer = styled.div`
  flex-basis: 30%;
  flex-grow: 0;
  flex-shrink: 0;
  font-size: 14px;
`;

export const Icon = styled.img`
  max-width: 75px;
`;

export const Content = styled.div`
  box-sizing: border-box;
  padding-left: 8px;
`;

export const Title = styled.a`
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  color: ${tertiary};
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 0.5rem;
`;

export const Description = styled.div`
  margin-top: 0.5rem;
  color: rgb(34, 34, 34);
  line-height: 20px;
`;

export const Tag = styled.p`
  background-color: rgb(255, 255, 255);
  box-sizing: border-box;
  color: ${tertiary};
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  padding: 0.5rem;
  margin: 0.5rem;
`;

interface LanguageTagProps {
  color: string;
}

export const LanguageTag = styled.span<LanguageTagProps>`
  background-color: ${props => `${props.color}`};
  position: relative;
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
