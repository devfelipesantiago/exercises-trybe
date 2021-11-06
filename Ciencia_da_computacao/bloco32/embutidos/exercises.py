trybe_course = ["Introdução", "Front-end", "Back-end"]

# Adicione o elemento "Ciência da Computação" à lista.
trybe_course.append("Ciência da Computação")
print(trybe_course)
# Acesse e altere o primeiro elemento da lista para "Fundamentos".
trybe_course[0] = "Fundamentos"
print(trybe_course)

var = set()
var.add("Felipe")
print(var)

info = {
    "personagem": "Margarida",
    "origem": "Pato Donald",
    "nota": "Namorada do personagem principal nos quadrinhos do Pato Donald",
}

print(info.keys())
info.update({"recorrente": "Sim"})
print(info)
del info["origem"]
print(info)
