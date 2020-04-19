import {tailwind} from '@theme-ui/presets';

import styled, {getColorScheme} from 'utils/styles';

interface Props {
  isDark: boolean;
}

interface LanguageTagProps {
  color: string;
}

const { gray } = tailwind.colors;

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  grid-column-gap: 1rem;
  grid-row-gap: 1rem;
  justify-items: center;
  font-size: 1.1rem;
`;

export const Card = styled.div<Props>`
  width: 100%;
  border-radius: 5px;

  :hover {
    transform: translateY(0.5rem);
  }
`;

export const Top = styled.div<Props>`
  background-color: ${(props) =>
    getColorScheme(props.isDark).secondaryBackgroundColor};
  height: 5px;
`;

export const Main = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
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

export const Title = styled.a<Props>`
  cursor: pointer;
  background-color: ${(props) =>
    getColorScheme(props.isDark).secondaryBackgroundColor};
  box-sizing: border-box;
  color: ${(props) => getColorScheme(props.isDark).text};
  display: inline-block;
  font-size: 16px;
  font-weight: 600;
  line-height: 16px;
  padding: 0.5rem;
  text-decoration: none;
`;

export const Description = styled.div`
  margin-top: 0.5rem;
`;

export const Tag = styled.p<Props>`
  background-color: ${(props) =>
    getColorScheme(props.isDark).secondaryBackgroundColor};
  box-sizing: border-box;
  color: ${(props) => getColorScheme(props.isDark).text};
  display: inline-block;
  font-size: 14px;
  font-weight: 600;
  line-height: 16px;
  padding: 0.5rem;
  margin-right: 0.5rem;
`;

export const LanguageTag = styled.span<LanguageTagProps>`
  background-color: ${(props) => `${props.color}`};
  position: relative;
  display: inline-block;
  width: 0.7rem;
  height: 0.7rem;
  border-radius: 50%;
  margin-right: 0.5rem;
`;
