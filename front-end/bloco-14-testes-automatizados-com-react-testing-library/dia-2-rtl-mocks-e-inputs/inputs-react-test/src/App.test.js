import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('changing value of inputs and the value saved', () => {
  render(<App />);
  const inputName = screen.getByRole('textbox', { name: /nome/i });
  expect(inputName).toBeInTheDocument();
  expect(inputName).toHaveValue('');
  userEvent.type(inputName, 'Trybe Student');
  expect(inputName).toHaveValue('Trybe Student');

  const inputEmail = screen.getByRole('textbox', { name: /email/i });
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toHaveValue('');
  userEvent.type(inputEmail, 'student@trybe.com');
  expect(inputEmail).toHaveValue('student@trybe.com');
});
