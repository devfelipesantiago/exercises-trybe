# fornece condições para iterações como permutação e combinação
import itertools

string = input("String a ser permutada: ")
result = itertools.permutations(string, len(string))

for i in result:
    print("".join(i))
