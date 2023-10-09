import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home';

test("Example 1 renders successfully", () => {
    render(<Home/>);

    const element = screen.getByText(/Online Shopping/i);

    expect(element).toBeInTheDocument();
})
