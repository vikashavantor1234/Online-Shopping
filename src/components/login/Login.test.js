import React from 'react';
import { render, screen } from '@testing-library/react';
import Login from './Login';

test("Example 1 renders successfully", () => {
    render(<Login/>);

    const element = screen.getByText(/Online Shopping/i);

    expect(element).toBeInTheDocument();
})
