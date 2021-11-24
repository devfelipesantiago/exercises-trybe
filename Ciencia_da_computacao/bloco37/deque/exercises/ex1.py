# 1
def clear(self):
    self._data.clear()


# 2
def clear(self):
    self._data = list()


# 3
def clear(self):
    del self._data[:]


# 4
def clear(self):
    while self._data:
        self.pop_back()


# 5
def clear(self):
    while self._data:
        self.pop_front()


"============================================================================="

# 1
def exists(self, value):
    return value in self._data


# 2
def exists(self, value):
    return self._data.count(value) > 0


"============================================================================="

# 1
def peek(self, position, order=None):
    if position < 0 or position > len(self) - 1:
        return None
    if not order:
        return self._data[position]
    return self._data[::-1][position]


# 2
def peek(self, position, order=None):
    if position < 0 or position > len(self) - 1:
        return None

    if not order:
        for index, value in enumerate(self._data):
            if position == index:
                return value
    else:
        for index, value in enumerate(self._data[::-1]):
            if position == index:
                return value

    return None


"============================================================================="
