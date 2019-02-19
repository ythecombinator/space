const baseColors = {
  white: "#fff",
  grayishBlue: "#adbdc3",
  lightGrayishBlue: "#eceff1",
  veryDarkGrayishBlue: "#444b54",
  desaturatedDarkBlue: "#607d8b",
  mostlyDesaturatedDarkBlue: "#5b737d",
  grayishOrange: "#b5afa2",
  lightGrayishOrange: "#d8d3cc",
  darkGrayishOrange: "#938a77",
  veryDarkGrayishRed: "#544544"
};

const colors = {
  // Core
  primary: baseColors.mostlyDesaturatedDarkBlue,
  secondary: baseColors.darkGrayishOrange,
  tertiary: baseColors.veryDarkGrayishRed,
  // Other stuff
  white: baseColors.white,
  background: baseColors.white,
  hero: baseColors.mostlyDesaturatedDarkBlue,
  text: {
    regular: baseColors.veryDarkGrayishBlue,
    highlighted: baseColors.veryDarkGrayishRed
  },
  dates: {
    regular: baseColors.veryDarkGrayishRed
  },
  links: {
    regular: {
      text: baseColors.mostlyDesaturatedDarkBlue,
      border: baseColors.grayishBlue
    },
    highlighted: {
      text: baseColors.darkGrayishOrange,
      border: baseColors.grayishOrange
    }
  },
  signature: baseColors.lightGrayishOrange,
  map: {
    fill: baseColors.desaturatedDarkBlue,
    stroke: baseColors.lightGrayishBlue
  }
};

export { colors };
