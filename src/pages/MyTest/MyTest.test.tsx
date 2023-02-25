import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import MyTest from './MyTest';

describe('TEST Component', () => {
  test('renders learn react link', () => {
    render(<MyTest />);
    const linkElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button')
    const input = screen.getByPlaceholderText(/input value/i)
    expect(linkElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input).toMatchSnapshot();
  });
})
