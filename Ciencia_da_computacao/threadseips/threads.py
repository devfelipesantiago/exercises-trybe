from threading import Thread  # Importando a class Thread do módulo threading
import time


def car1(speed, pilot):
    route = 0
    while route <= 100:
        route += speed
        time.sleep(0.5)
        print(f"\nPiloto: {pilot}, Km: {route}, ")


t_car1 = Thread(target=car1, args=[15, "Bob"])
t_car2 = Thread(target=car1, args=[25, "Sean"])

t_car1.start()
t_car2.start()
