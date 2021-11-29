import React from 'react';
import { render, screen } from '@testing-library/react';
import ValidEmail from './ValidEmail';

describe('Test just one component', () => {
  it('test if the email is valid', () => {
    const EMAIL_USER = 'user@example.com';
    render(<ValidEmail email={EMAIL_USER} />);
    const isValid = screen.getByText('Email Válido');
    expect(isValid).toBeInTheDocument();
  });
  it('Check if the email is invalid', () => {
    const EMAIL_USER = 'userexample.com';
    render(<ValidEmail email={EMAIL_USER} />);
    const isValid = screen.getByText('Email Inválido');
    expect(isValid).toBeInTheDocument();
  })
})