from ex2 import Deque


def isPalindromo(terms):
    deque = Deque()

    for character in terms:
        if character.isalpha():
            deque.push_back(character.lower())

    while len(deque) > 1:
        front_item = deque.pop_front()
        back_item = deque.pop_back()

        if front_item != back_item:
            return False
    return True
