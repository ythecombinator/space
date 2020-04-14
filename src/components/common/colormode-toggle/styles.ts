import styled from 'utils/styles';

export const Button = styled.button`
  opacity: 0.65;
  position: ${`relative`};
  border-radius: ${`5px`};
  width: ${`40px`};
  height: ${`25px`};
  display: ${`flex`};
  align-items: ${`center`};
  justify-content: ${`center`};
  transition: ${`opacity 0.3s ease`};
  border: ${`none`};
  outline: ${`none`};
  background: ${`none`};
  cursor: ${`pointer`};
  padding: 0px;
  appearance: ${`none`};

  &:hover,
  &:focus {
    opacity: 1;
  }
`;

interface IconProps {
  isDark: boolean;
}

export const Icon = styled.div<IconProps>`
  position: ${`relative`};
  width: ${`24px`};
  height: ${`24px`};
  border-radius: ${`50%`};
  border: ${(props) =>
    props.isDark ? `4px solid ${props.theme.colors.toggleIcon}` : `none`};
  background-color: ${(props) => (props.isDark ? `toggleIcon` : `transparent`)};
  transform: ${(props) => (props.isDark ? `scale(0.55)` : `scale(1)`)};
  transition: ${`all 0.45s ease`};
  overflow: ${(props) => (props.isDark ? `visible` : `hidden`)};
  box-shadow: ${(props) =>
    props.isDark
      ? `none`
      : `inset 8px -8px 0px 0px ${props.theme.colors.toggleIcon}`};

  &:before {
    content: ${`""`};
    position: ${`absolute`};
    right: ${`-9px`};
    top: ${`-9px`};
    height: ${`24px`};
    width: ${`24px`};
    border: ${(props) =>
      props.isDark ? `2px solid ${props.theme.colors.toggleIcon}` : `none`};
    border-radius: ${`50%`};
    transform: ${(props) =>
      props.isDark ? `translate(14px, -14px)` : `translate(0, 0)`};
    opacity: ${(props) => (props.isDark ? 0 : 1)};
    transition: ${`transform 0.45s ease`};
  }

  &:after {
    content: ${`""`};
    width: ${`8px`};
    height: ${`8px`};
    border-radius: ${`50%`};
    margin: ${`-4px 0 0 -4px`};
    position: ${`absolute`};
    top: ${`50%`};
    left: ${`50%`};
    box-shadow: ${(props) =>
      `0 -23px 0 ${props.theme.colors.toggleIcon}, 0 23px 0 ${props.theme.colors.toggleIcon}, 23px 0 0 ${props.theme.colors.toggleIcon}, -23px 0 0 ${props.theme.colors.toggleIcon}, 15px 15px 0 ${props.theme.colors.toggleIcon}, -15px 15px 0 ${props.theme.colors.toggleIcon}, 15px -15px 0 ${props.theme.colors.toggleIcon}, -15px -15px 0 ${props.theme.colors.toggleIcon}`};
    transform: ${(props) => (props.isDark ? `scale(1)` : `scale(0)`)};
    transition: ${`all 0.35s ease`};
  }
`;
