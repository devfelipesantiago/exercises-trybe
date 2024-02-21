class Car {
  brand: string;
  color: string;
  doors: number;

  constructor(brand: string, color: string, doors: number) {
    this.brand = brand;
    this.color = color;
    this.doors = doors;
  }

  honk() {
    console.log("HONK!");
  }

  turnOn() {
    console.log("Turning on!");
  }

  turnOff() {
    console.log("Turning off!");
  }

  speedUp() {
    console.log("ACCELERATE!");
  }

  speedDown() {
    console.log("DECELERATE!");
  }

  stop() {
    console.log("STOP!");
  }

  turn(direction: string) {
    console.log(`${direction}`);
  } 
}

export default Car;