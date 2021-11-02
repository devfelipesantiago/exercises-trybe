def fibonacci_iter(n):
    sequence = [0, 1]
    if n >= 2:
        for x in range(2, n + 1):
            next = sequence[-1] + sequence[-2]
            sequence.append(next)
    return sequence[n]


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)


def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


# recursivo
def reverses(list):
    if len(list) < 2:
        return list
    else:
        return reverse(list[1:]) + [list[0]]


def countdown(n):  # nome da função e parâmetro
    if n == 0:  # condição de parada
        print("FIM!")
    else:
        print(n)
        countdown(n - 1)  # chamada de si mesma com um novo valor


countdown(5)


def factorial_recursive(n):  # nome da função e parâmetro
    if n == 1:  # condição de parada
        return 1

    else:
        return n * factorial_recursive(
            n - 1
        )  # chamada de si mesma com um novo valor


factorial_recursive(5)
