import requests

r = requests.get("http://viacep.com.br/ws/09861390/json/")

print(r.status_code)
print(r.text)
print(r.json()["cep"])
