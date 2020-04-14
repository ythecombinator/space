import styled, {CreateStyled} from '@emotion/styled';
import {tailwind} from '@theme-ui/presets';

import {Theme} from 'model/Theme';

const { gray } = tailwind.colors;

export const getColorScheme = (isDark: boolean) => {
  const primaryBackgroundColor = isDark ? gray[8] : gray[1];
  const secondaryBackgroundColor = isDark ? gray[1] : gray[7];
  const text = isDark ? gray[8] : gray[1];

  const stroke1 = isDark ? gray[8] : gray[1];
  const stroke2 = isDark ? gray[7] : gray[2];
  const stroke3 = isDark ? gray[6] : gray[3];

  return {
    primaryBackgroundColor,
    secondaryBackgroundColor,
    text,
    stroke1,
    stroke2,
    stroke3,
  };
};

export default styled as CreateStyled<Theme>;
