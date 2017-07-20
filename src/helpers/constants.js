const baseColors = {
	white: "#fff",
	veryDarkGrayishBlue:"#444b54",
	mostlyDesaturatedDarkBlue: "#5b737d",
	grayishBlue: "#adbdc3",
	darkGrayishOrange: "#938a77",
	grayishOrange: "#b5afa2",
	lightGrayishOrange: "#d8d3cc",
	veryDarkGrayishRed: "#544544"
};

const colors = {
	statusBar: baseColors.veryDarkGrayishRed,
	background: baseColors.white,
	hero: baseColors.mostlyDesaturatedDarkBlue,
	text: {
		regular: baseColors.veryDarkGrayishBlue,
		highlighted: baseColors.veryDarkGrayishRed
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
	signature: baseColors.lightGrayishOrange
};

export {colors};
