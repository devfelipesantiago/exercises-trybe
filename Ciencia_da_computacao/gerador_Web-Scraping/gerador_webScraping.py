# Biblioteca de extração de dados de arquivos HTML e XML.
from bs4 import BeautifulSoup

# Permite o envio de requisições HTTP em Python
import requests

# recebe o conteudo da requests HTTP
site = requests.get(
    "https://www.climatempo.com.br/"
).content  # content pega todo o conteudo do site e joga no obj site

soup = BeautifulSoup(site, "html.parser")  # obj soup baixa do site o html

print(soup.prettify())  # Exibe o HTML

temp = soup.find(
    "h6", class_="copyright"
)  # para pegar um valor expecifico passa a class da tag html

print(temp.string)
print(soup.title.string)  # para pegar uma tag expecifica como string
