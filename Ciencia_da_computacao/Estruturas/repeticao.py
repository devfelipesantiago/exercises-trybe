restaurants = [
    {"name": "Restaurante A", "nota": 4.5},
    {"name": "Restaurante B", "nota": 3.0},
    {"name": "Restaurante C", "nota": 4.2},
    {"name": "Restaurante D", "nota": 2.3},
]

filtered_restaurants = []
min_rating = 3.0

for restaurant in restaurants:
    if restaurant["nota"] > min_rating:
        filtered_restaurants.append(restaurant)
print(filtered_restaurants)

for index in range(5):
    print(index)


# Listas
filtered_restaurants = [
    restaurant for restaurant in restaurants if restaurant["nota"] > min_rating
]
print(filtered_restaurants)

filtered_restaurants = [
    restaurant["name"]
    for restaurant in restaurants
    if restaurant["nota"] > min_rating
]
print(filtered_restaurants)

# fibonacci
n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next

n = 5
fat = 1
count = 0
while count < n:
    count += 1
    fat *= count
    print(fat)

ratings = [6, 8, 5, 9, 10]
new_ratings = []

for number in ratings:
    new_ratings.append(number * 10)
print(new_ratings)
