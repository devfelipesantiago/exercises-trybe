import json  # json é um modulo que vem embutido, porém precisamos importá-lo


with open("pokemons.json") as file:
    content = file.read()  # leitura do arquivo
    pokemons = json.loads(content)["results"]
    # o conteúdo é transformado em estrutura python equivalente,
    # dicionário neste caso.
    # acessamos a chave results que é onde contém nossa lista de pokemons

print(pokemons[0])  # imprime o primeiro pokemon da lista

with open("pokemons.json") as file:
    pokemons = json.load(file)["results"]

print(pokemons[0])  # imprime o primeiro pokemon da lista

# Separamos somente os do tipo grama
grass_type_pokemons = [
    pokemon for pokemon in pokemons if "Grass" in pokemon["type"]
]

with open("grass_pokemons.json", "w") as file:
    json_to_write = json.dumps(grass_type_pokemons)
    # conversão de Python para o formato json (str)
    file.write(json_to_write)

# abre o arquivo para escrita
with open("grass_pokemons.json", "w") as file:
    # escreve no arquivo já transformando em formato json a estrutura
    json.dump(grass_type_pokemons, file)
