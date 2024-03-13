import React from 'react';
import { render, fireEvent, createTest } from 'vitest';
import App from './App';

const test = createTest();

test('renders title correctly', () => {
  const { getByText } = render(<App />);
  const titleElement = getByText(/Budget Tracker/i);
  expect(titleElement).not.toBeNull();
});

test('adds expense correctly', async () => {
  const { getByLabelText, getByText, wait } = render(<App />);
  
  // Fill out and submit the expense form
  fireEvent.change(getByLabelText(/Expense Name/i), { target: { value: 'Groceries' } });
  fireEvent.change(getByLabelText(/Amount/i), { target: { value: '50' } });
  fireEvent.click(getByText(/Add Expense/i));
  
  // Wait for the expense to be added to the list
  await wait(() => getByText(/Groceries - \$50/i));
  
  // Check if the expense is added to the list
  const expenseElement = getByText(/Groceries - \$50/i);
  expect(expenseElement).not.toBeNull();
});
