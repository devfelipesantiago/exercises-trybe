import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

describe('Testes inputs forms', () => {
  it('alterando o valor dos campos e testendo o valor guardado', () => {
    render(<App />);
    expect(screen.getByTestId('input-nome')).toHaveValue('');
    fireEvent.change(screen.getByTestId('input-nome'), { target: { value: 'Estudante da trybe' } });
    expect(screen.getByTestId('input-nome')).toHaveValue('Estudante da trybe');

    const inputEmail = screen.getByTestId('input-email');
    expect(inputEmail).toHaveValue('');
    fireEvent.change(inputEmail, { target: { value: 'estudante@trybe.com' } });
    expect(inputEmail).toHaveValue('estudante@trybe.com');
  });
});
