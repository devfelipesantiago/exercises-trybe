import { fireEvent, render } from '@testing-library/react';
import App from './App';

describe('Tela de inserção do email', () => {
  it('Verifica se existe o campo de email', () => {
    //acessar os elementos
    const { getByLabelText } = render(<App />);
    const linkElement = getByLabelText('Email');
    //Fazer os testes
    expect(linkElement).toBeInTheDocument();
    expect(linkElement.type).toBe('email');
  });

  it('Verificando se existe um botão de \'enviar\'', () => {
    const { getByTestId } = render(<App />);
    const btn = getByTestId('id-send');

    expect(btn).toBeInTheDocument();
    expect(btn.type).toBe('button');
    expect(btn).toHaveValue('Enviar');
  });

  it('Verificando se existe um botões', () => {
    const { getAllByRole } = render(<App />);
    const btns = getAllByRole('button');

    expect(btns.length).toBe(2);
  });

  it('Verifica que, ao inserir um email e clicar em "Enviar", o email aparece na tela', () => {
    // Acessar os elementos da tela
    const { getByLabelText, getByTestId } = render(<App />);
    const emailInput = getByLabelText('Email');
    const sendButton = getByTestId('id-send');

    // Interagir com eles (se houver necessidade)
    fireEvent.change(emailInput, { target: { value: "felipe@teste.com" } });
    fireEvent.click(sendButton);
    const userEmail = getByTestId('id-email-user');

    // Fazer os testes
    expect(emailInput.value).toBe('');
    expect(userEmail.textContent).toBe("Valor: felipe@teste.com");
  });

  it('Verificando se o botão e o campo email estão funcionando.', () => {
    const { getByTestId, getByLabelText } = render(<App />);
    const EMAIL_USER = 'email@email.com';
    const btnSend = getByTestId('id-send');
    const inputEmail = getByLabelText('Email');
    fireEvent.change(inputEmail, { target: { value: EMAIL_USER } });
    fireEvent.click(btnSend);
    const textEmail = getByTestId('id-email-user');
    expect(inputEmail).toHaveValue('');
    expect(textEmail).toBeInTheDocument();
    expect(textEmail).toHaveTextContent(`Valor: ${EMAIL_USER}`);
  });
});

