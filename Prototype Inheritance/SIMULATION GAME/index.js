function Vehicle(brand, model, speed, fuelType) {
          this.brand = brand
          this.model = model
          this.speed = speed
          this.fuelType = fuelType
}


Vehicle.prototype.accelerator = function () {
          this.speed++
}
Vehicle.prototype.brake = function () {
          this.speed--
}

Vehicle.prototype.refuel = function () {
          console.log('vehicle is refueling');
}


function Car(brand, model, speed, fuelType, wheels) {
          Vehicle.call(this, brand, model, speed, fuelType)
          this.numberOfWheel = wheels
}




Car.prototype.honk = function () {
          console.log("honking sound");
}


Object.setPrototypeOf(Car.prototype, Vehicle.prototype)

function Airplane(brand, model, speed, fuelType, noOfEngines, gears) {
          Vehicle.call(this, brand, model, speed, fuelType)
          this.numberOfEngines = noOfEngines
          this.gears = gears
}


Airplane.prototype.takeOff = function () {
          console.log("airplane is taking off");

}

Object.setPrototypeOf(Airplane.prototype, Vehicle.prototype)

let data = new Vehicle('tata', "SUV 700", 180, "petrol")
let car = new Car('Range Rover', "Vogue", 380, "disel", 4)
let plan = new Airplane('SpiceJet ', "A340", 1000, " BioJet fuel", 2, 500)

console.log(data)

console.log(car)
console.log(plan)

car.honk()


