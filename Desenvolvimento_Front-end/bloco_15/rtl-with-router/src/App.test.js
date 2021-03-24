import React from 'react';
import { fireEvent } from '@testing-library/react';
import renderWithRouter from './renderWithRouter';
import App, { About } from './App';

describe('teste da aplicação toda', () => {
  it('deve renderizar o componente App', () => {
    const { getByText } = renderWithRouter(<App />);
    expect(getByText(/Você está na página Início/)).toBeInTheDocument();
  });

  it('deve renderizar o componete sobre', () => {
    const { getByText, history } = renderWithRouter(<App />);
    fireEvent.click(getByText(/Sobre/i));
    expect(history.location.pathname).toBe('/about');
    expect(getByText(/Você está na página Sobre/)).toBeInTheDocument();
  });

  it('deve tertar um caminho não existente e a renderização do Not Found', () => {
    const { getByText, history } = renderWithRouter(<App />);
    history.push('/pagina/que-nao-existe/');
    expect(getByText(/Página não encontrada/i)).toBeInTheDocument();
  });

  it('deve renderizar o componente About (apenas componente)', () => {
    const { getByText } = renderWithRouter(<About />);
    expect(getByText(/Você está na página Sobre/i)).toBeInTheDocument();
  });
});