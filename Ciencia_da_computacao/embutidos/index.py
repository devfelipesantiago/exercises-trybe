# type int
a = 5
print(type(a))
# type float
a = 5.0
print(type(a))
# type complex
a = 5j
print(type(a))

fruits = [
    "orange",
    "apple",
    "grape",
    "pineapple",
]
# elementos são definidos separados por vírgula, envolvidos por colchetes

print(fruits[0])  # o acesso é feito por indices iniciados em 0

print(fruits[-1])  # o acesso também pode ser negativo

fruits.append("banana")  # adicionando uma nova fruta
print(fruits)
fruits.remove("pineapple")  # removendo uma fruta
print(fruits)
# acrescenta uma lista de frutas a lista original
fruits.extend(["pear", "melon", "kiwi"])
print(fruits)
# retorna o índice onde a fruta está localizada, neste caso 1 em seu programa
print(fruits.index("apple"))
fruits.sort()  # ordena a lista de frutase
print(fruits)

# Tuplas
# elementos são definidos separados por vírgula, envolvidos por parenteses
user = (
    "Cássio",
    "Botaro",
    42,
)
# acesso também por índices
print(user[0])
print(user[2])

# Set
# elementos separados por vírgula, envolvidos por chaves
permissions = {"member", "group"}

# adiciona um novo elemento ao conjunto
permissions.add("root")
print(permissions)
# como o elemento já existe, nenhum novo item é adicionado ao conjunto
permissions.add("member")

# retorna um conjunto resultado da união
print(permissions.union({"user"}))

# retorna um conjunto resultante da intersecção dos conjuntos
print(permissions.intersection({"user", "member"}))

# retorna a diferença entre os dois conjuntos
print(permissions.difference({"user"}))

# assim como o set, qualquer estrutura iterável pode ser utilizada
# para criar um frozenset
permissions = frozenset(["member", "group"])

# novos conjuntos imutáveis podem ser criados à partir do original,
# mas o mesmo não pode ser modificado
permissions.union({"user"})

# retorna um conjunto resultante da intersecção dos conjuntos
permissions.intersection({"user", "member"})

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

# elementos no formato "chave:
# valor" separados por vírgula, envolvidos por chaves
people_by_id = {1: "Cássio", 2: "João", 3: "Felipe"}

# elementos são acessados por suas chaves
people_by_id[1]  # saída: Cássio

# outro exemplo, dessa vez usando strings como chaves
# (ao contrário de JS, as aspas duplas são obrigatórias)
people_by_name = {"Cássio": 1, "João": 2, "Felipe": 3}


# elementos podem ser removidos com a palavra chave del
del people_by_id[1]
people_by_id.items()  # dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3, ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
