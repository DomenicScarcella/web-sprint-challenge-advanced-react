import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from '@testing-library/user-event';
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    render(<CheckoutForm />)
    const header = screen.getByText(/checkout form/i);
    expect(header).toBeInTheDocument()
});

test("form shows success message on submit with form details", async () => {
    render(<CheckoutForm />)

    const firstname = screen.getByLabelText('First Name:')
    const lastname = screen.getByLabelText('Last Name:')
    const address = screen.getByLabelText('Address:')
    const city = screen.getByLabelText('City:')
    const state = screen.getByLabelText('State:')
    const zip = screen.getByLabelText('Zip:')
    const submit = screen.getByRole('button')

    userEvent.type(firstname, 'Elmer')
    userEvent.type(lastname, 'Fudd')
    userEvent.type(address, '123 Main St.')
    userEvent.type(city, 'Looney Toons')
    userEvent.type(state, 'NJ')
    userEvent.type(zip, '08312')
    userEvent.click(submit)

    const successMessage = screen.queryByTestId('successMessage')

    await waitFor(() => {
        expect(successMessage).toHaveTextContent('You have ordered some plants!')
    })
});
