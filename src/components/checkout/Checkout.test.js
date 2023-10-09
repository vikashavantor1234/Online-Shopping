import React from 'react';
import { render, screen } from '@testing-library/react';
import Checkout from './Checkout';

test("Example 1 renders successfully", () => {
    render(<Checkout/>);

    const element = screen.getByText(/Your Shopping Cart/i);

    expect(element).toBeInTheDocument();
})
