/* eslint-disable react/jsx-pascal-case */
import { Themed } from 'theme-ui';
import { TypeScale, TypeStyle, ColorPalette } from '@theme-ui/style-guide';

const StyleGuidePage = () => (
  <>
    <Themed.h1>Style Guide</Themed.h1>
    <Themed.h2>Color Palette</Themed.h2>
    <ColorPalette />
    <Themed.h2>Color Swatch</Themed.h2>
    <Themed.h2>Type Scale</Themed.h2>
    <TypeScale />
    <Themed.h2>Heading Style</Themed.h2>
    <TypeStyle fontFamily="heading" fontWeight="heading" lineHeight="heading">
      The quick brown fox jumps over the lazy dog.
    </TypeStyle>
    <Themed.h2>Body Style</Themed.h2>
    <TypeStyle fontFamily="body" fontWeight="body" lineHeight="body">
      The quick brown fox jumps over the lazy dog.
    </TypeStyle>
    <Themed.h2>Monospace Style</Themed.h2>
    <TypeStyle
      fontFamily="monospace"
      fontWeight="monospace"
      lineHeight="monospace"
    >
      The quick brown fox jumps over the lazy dog.
    </TypeStyle>
  </>
);

export default StyleGuidePage;
