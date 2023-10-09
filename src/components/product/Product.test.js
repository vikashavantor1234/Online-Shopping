import React from 'react';
import { render, screen } from '@testing-library/react';
import Product from './Product';

test("Example 1 renders successfully", () => {
    render(<Product/>);

    const element = screen.getByText(/Add to Cart/i);

    expect(element).toBeInTheDocument();
})
