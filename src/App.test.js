import React from 'react';
import { render, fireEvent, createTest } from 'vitest';
import App from './App';

const test = createTest();

test('renders title correctly', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Budget Tracker/i);
  expect(titleElement).not.toBeNull();
});
