import { render, screen } from "@testing-library/react";
import { userEvent } from "@testing-library/user-event";
import { describe, expect, test, vi } from "vitest";

import { Button } from "./button.js";

describe("Button", () => {
	test("renders children", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole("button", { name: "Click me" })).toBeInTheDocument();
	});

	test("defaults to primary variant", () => {
		render(<Button>Click me</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("data-variant", "primary");
	});

	test("applies secondary variant", () => {
		render(<Button variant="secondary">Click me</Button>);
		expect(screen.getByRole("button")).toHaveAttribute("data-variant", "secondary");
	});

	test("forwards click handler", async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		render(<Button onClick={onClick}>Click me</Button>);
		await user.click(screen.getByRole("button"));
		expect(onClick).toHaveBeenCalledOnce();
	});

	test("can be disabled", async () => {
		const user = userEvent.setup();
		const onClick = vi.fn();
		render(
			<Button disabled onClick={onClick}>
				Click me
			</Button>
		);
		await user.click(screen.getByRole("button"));
		expect(screen.getByRole("button")).toBeDisabled();
		expect(onClick).not.toHaveBeenCalled();
	});
});
