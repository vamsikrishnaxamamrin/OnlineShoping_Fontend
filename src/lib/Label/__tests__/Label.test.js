import React from 'react';
import { screen, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Label from '../Label.jsx';

test('Label text verify', () => {
  render(<Label>Hello</Label>);
  const labelElement = screen.getByText(/hello/i);
  expect(labelElement).toBeInTheDocument();
});

test('Label text verify', () => {
  render(<Label>Vamsi</Label>);
  const labelElement = screen.queryByText(/hello/i);
  expect(labelElement).not.toBeInTheDocument();
});
