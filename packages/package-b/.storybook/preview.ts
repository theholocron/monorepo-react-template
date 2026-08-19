import { type Preview } from "@storybook/react-vite";

const preview: Preview = {
	layout: "centered",
	parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i,
			},
		},
	},
	tags: ["autodocs"],
};

export default preview;
