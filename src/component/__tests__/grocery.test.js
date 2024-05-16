import Grocery from "../Grocery"
import { render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"; // importing whole library

test("Grocery component is loaded", () => {
    render(<Grocery />);

    const heading  = screen.getAllByRole('heading');
    expect(heading[0]).toBeInTheDocument();

})

test("Should load button inside the component", () => {
    render(<Grocery />);

    const button  = screen.getByRole('button');
    expect(button).toBeInTheDocument();
})

test("Should load button inside the component", () => {
    render(<Grocery />);

    const button  = screen.getByText('Test Jest Button');
    expect(button).toBeInTheDocument();
})