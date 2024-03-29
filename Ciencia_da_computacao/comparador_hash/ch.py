import hashlib

arquivo1 = "arquivoA.txt"
arquivo2 = "arquivoB.txt"

hash1 = hashlib.new("ripemd160")
hash2 = hashlib.new("ripemd160")

hash1.update(open(arquivo1, "rb").read())
hash2.update(open(arquivo2, "rb").read())

if hash1.digest() != hash2.digest():
    print(f"O arquivo: {arquivo1} é diferente do arquivo {arquivo2}")
    print("O hash do arquivo: arquivoA.txt é ", hash1.hexdigest())
    print("O hash do arquivo: arquivoB.txt é ", hash2.hexdigest())
else:
    print(f"O arquivo: {arquivo1} é igual ao arquivo {arquivo2}")
    print("O hash do arquivo: arquivoA.txt é ", hash1.hexdigest())
    print("O hash do arquivo: arquivoB.txt é ", hash2.hexdigest())
