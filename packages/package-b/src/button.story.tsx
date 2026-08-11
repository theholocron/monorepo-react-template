import type { Meta, StoryObj } from "@storybook/react-vite";
import { expect } from "storybook/test";

import { Button } from "./button.js";

const meta = {
	component: Button,
	title: "Button",
} satisfies Meta<typeof Button>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary = {
	args: {
		children: "Click me",
		variant: "primary",
	},
	play: async ({ canvas }) => {
		const button = await canvas.findByRole("button", { name: "Click me" });
		await expect(button).toBeInTheDocument();
		await expect(button).toHaveAttribute("data-variant", "primary");
	},
} satisfies Story;

export const Secondary = {
	args: {
		children: "Click me",
		variant: "secondary",
	},
	play: async ({ canvas }) => {
		const button = await canvas.findByRole("button", { name: "Click me" });
		await expect(button).toBeInTheDocument();
		await expect(button).toHaveAttribute("data-variant", "secondary");
	},
} satisfies Story;

export const Disabled = {
	args: {
		children: "Click me",
		disabled: true,
	},
	play: async ({ canvas }) => {
		const button = await canvas.findByRole("button", { name: "Click me" });
		await expect(button).toBeDisabled();
	},
} satisfies Story;
