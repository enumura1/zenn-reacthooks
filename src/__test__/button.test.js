import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test Button Component", () => {
    test("render form with 5 button", async () => {
        render(<App />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(5);
    });
});