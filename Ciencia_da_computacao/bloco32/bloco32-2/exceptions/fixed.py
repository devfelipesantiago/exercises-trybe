file = open("arquivo.txt", mode="w")

LINES = [
    "MArcos 10\n",
    "Felipe 4\n",
    "João 6\n",
    "Ana 10\n",
    "Maria 9\n",
    "Miguel 5\n",
]
file.writelines(LINES)
list = []
with open("arquivo.txt") as arquivo:
    for line in arquivo:
        student_grade = line
        student_grade = student_grade.split(" ")
        if int(student_grade[1]) < 6:
            list.append(student_grade[0] + "\n")

with open("arquivo.txt", mode="w") as list:
    print(arquivo)
    list.writelines(arquivo)
print(file.closed)
