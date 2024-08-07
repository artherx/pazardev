/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */

const tintColorLight = "#0a7ea4";
const tintColorDark = "#fff";
const primary = {
	100: "#d1ece8",
	200: "#a2d9d1",
	300: "#74c5b9",
	400: "#45b2a2",
	500: "#179f8b",
	600: "#127f6f",
	700: "#0e5f53",
	800: "#094038",
	900: "#05201c",
};
const secundary = {
	100: "#d0dde2",
	200: "#a0bbc5",
	300: "#7199a8",
	400: "#41778b",
	500: "#12556e",
	600: "#0e4458",
	700: "#0b3342",
	800: "#07222c",
	900: "#041116",
};
const terciario = {
	100: "#d0d4df",
	200: "#a0a9be",
	300: "#717d9e",
	400: "#41527d",
	500: "#12275d",
	600: "#0e1f4a",
	700: "#0b1738",
	800: "#071025",
	900: "#040813",
};

export const Colors = {
	light: {
		primary: primary[500], //teal 500
		secondary: secundary[500],
		text: terciario[900],
		textB: terciario[900],
		textholder: "#374151",
		background: "#EFEFEF",
		tint: tintColorLight,
		icon: terciario[900],
		tabIconDefault: "#687076",
		tabIconSelected: tintColorLight,
		butttonColor: primary[400],
		butttonColorP: primary[600],
	},
	dark: {
		primary:  primary[500], //teal
		secondary: secundary[500],
		text: terciario[100],
		textB: terciario[100],
		textholder: "#cbd5e1",
		background: "#1F1F1F",
		tint: tintColorDark,
		icon: "#cbd5e1",
		tabIconDefault: "#9BA1A6",
		tabIconSelected: tintColorDark,
		butttonColor: primary[500],
		butttonColorP: primary[600],
	},
};
