import random  # Implementa geradores de números, letras e símbolos aleatórios.
import string  # Implementa operações comuns para strings.

size_code = 16  # Tamanho padrão da senha.


def create_code():
    # Método ascii_letters gera na senha as letras maiúsculas e minúsculas.
    # Método string.digits gera os digitos numerados + os caracteres desejados.
    chars = string.ascii_letters + string.digits + "ç!@#$%&*()-=+_"
    # SystemRandom utiliza a classe urandom da bibliotece OS
    # urandom gera números aleatórios a partir de fontes fornecidas pelo
    # sistema operacional.
    rnd = random.SystemRandom()

    # Gera um novo char aleatório para cada i do range.
    return "".join(rnd.choice(chars) for i in range(size_code))


print(create_code())
