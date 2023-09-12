import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test home page title", () => {
    //home page title
    test("Test home page title", () => {
        render(<App />);
        expect(screen.getByText('Home Page')).toBeInTheDocument();
    });
});