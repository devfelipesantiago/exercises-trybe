import ipaddress  # permite a manipilação de ips, calculo e soma


ip = "192.168.0.1"
ip_rede = "192.168.0.0/24"

endereco = ipaddress.ip_address(ip)
rede = ipaddress.ip_network(ip_rede, strict=False)

print(endereco + 100)

for i in ip_rede:
    print(rede)
