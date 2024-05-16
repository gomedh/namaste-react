import Header from "../Header";
import appStore from "../../utils/appStore";
import { render, screen, fireEvent } from "@testing-library/react";
import {Provider} from "react-redux"
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("should load Header component with login button", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: "Login"})
    expect (loginButton).toBeInTheDocument();

})

it("should change Login Button to logout on click", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole('button', {name: "Login"});

    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole('button', {name: "Logout"});
    expect (logoutButton).toBeInTheDocument();


})

it("should load Header component with cart option", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )
    const cartItems = screen.getByText("Cart - (0)");
    expect (cartItems).toBeInTheDocument();

})

it("should load Header component with contact us option", () => {

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header />
            </Provider>
        </BrowserRouter>
    )

    const contactUs = screen.getByText("Contact us");
    expect (contactUs).toBeInTheDocument();

})

