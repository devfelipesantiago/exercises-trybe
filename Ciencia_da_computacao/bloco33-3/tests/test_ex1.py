from exercises.ex1 import fizzbuzz
import sys

sys.path.append("../")


def expected_return_fizz():
    return [1, 2, "Fizz"]


def expected_return_buzz():
    return [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz"]


def expected_return_fizz_and_buzz():
    return [
        1,
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
    ]


def test_number_divided_by_three():
    assert fizzbuzz(3) == expected_return_fizz()


def test_number_divided_by_five():
    assert fizzbuzz(10) == expected_return_buzz()


def test_number_divided_by_three_and_five():
    assert fizzbuzz(15) == expected_return_fizz_and_buzz()


# função recebe um N e retorna uma lista
# Se N for divisivel por 3 a função retorna lista com fizz
# Se N for divisivel por 5 a função retorna lista com buzz
# Se N for divisivel por 3 e 5 a função retorna lista com fizzBuzz
# Se N não for int
# Se N for menor que 0
# Se N for igual a 0
