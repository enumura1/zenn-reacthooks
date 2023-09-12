import { render, screen } from "@testing-library/react";
import App from "../App";

describe("Test Button Component", () => {
    //Number of button components
    test("render form with 5 button", async () => {
        render(<App />);
        const buttonList = await screen.findAllByRole("button");
        expect(buttonList).toHaveLength(5);
    });
    // button text
    test('render buttons text', () => {
        render(<App />);
        const textsToCheck = ['useState Page', 'useEffect Page', 'useContext Page', 'useRef Page', 'Custom Hook Page'];
        textsToCheck.forEach((text) => {
            const linkElement = screen.getByText(new RegExp(text, 'i'));
            expect(linkElement).toBeInTheDocument();
        });
    });

});