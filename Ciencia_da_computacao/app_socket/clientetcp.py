import socket
import sys


def main():
    try:
        s = socket.socket(socket.AF_INET, socket.SOCK_STREAM, 0)
    except socket.error as e:
        print("A conexão falhou")
        print(f"Error {e}")
        sys.exit()
    print("Socket criado com sucesso")

    Host_Alvo = input("Digite o Host ou Ip a ser conectado: ")
    Porta_Alvo = input("Digite a Porta a ser conectado: ")

    try:
        s.connect((Host_Alvo, int(Porta_Alvo)))
        print("Cliente TCP conectado com sucesso")
        s.shutdown(2)
    except socket.error as e:
        print("A conexão falhou")
        print(f"Error {e}")
        sys.exit()


if __name__ == "__main__":
    main()
