import React from 'react';
import { render, screen } from '@testing-library/react';
import Header from './Header';

test("Example 1 renders successfully", () => {
    render(<Header/>);

    const element = screen.getByText(/Online Shopping/i);

    expect(element).toBeInTheDocument();
})
