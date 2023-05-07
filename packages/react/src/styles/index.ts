import {
  colors,
  fontSizes,
  fontWeights,
  fonts,
  lineHeights,
  radius,
  space,
} from '@gridmize/tokens';
import { createStitches, defaultThemeMap } from '@stitches/react';

export const {
  styled,
  css,
  globalCss,
  getCssText,
  keyframes,
  config,
  theme,
  createTheme,
} = createStitches({
  themeMap: {
    ...defaultThemeMap,
    height: 'space',
    width: 'space',
  },
  theme: {
    colors,
    space,
    radii: radius,
    fonts,
    fontSizes,
    fontWeights,
    lineHeights,
  },
});
