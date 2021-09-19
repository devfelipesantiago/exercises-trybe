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


def test_fizzbuzz_should_return_list_of_numbers():
    assert fizzbuzz(2) == [1, 2]


def test_fizzbuzz_divisible_by_three_should_be_fizz():
    assert fizzbuzz(3)[-1] == "Fizz"


def test_fizzbuzz_divisible_by_five_should_be_buzz():
    assert fizzbuzz(5)[-1] == "Buzz"


def test_fizzbuzz_divisible_by_five_and_three_should_be_fizzbuzz():
    assert fizzbuzz(15)[-1] == "FizzBuzz"
