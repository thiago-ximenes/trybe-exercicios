import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('Teste dos testes', () => {
  beforeEach(() => render(<App />))
  test('Check if exists an email input.', () => {
    const emailInput = screen.getByLabelText(/email/i);
    expect(emailInput).toBeInTheDocument();
    expect(emailInput).toHaveProperty('type', 'email')
  });
  it('Check if exists 2 buttons', () => {
    const button = screen.getAllByRole('button');
    expect(button).toHaveLength(2)
  });
  it('Check if exists a send button', () => {
    const sendButton = screen.getByTestId('id-send');
    expect(sendButton).toBeInTheDocument();
    expect(sendButton).toHaveProperty('type', 'button');
    expect(sendButton).toHaveValue('Enviar');
  });
  it('Check if email field and button is working.', () => {
    const EMAIL_USER = 'user@example'

    const sendButton = screen.getByTestId('id-send');
    const emailInput = screen.getByLabelText('Email');
    const textEmail = screen.getByTestId('id-email-user');

    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent('Valor:');

    userEvent.type(emailInput, EMAIL_USER);
    userEvent.click(sendButton);

    expect(emailInput).toHaveValue('');
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  })
})

