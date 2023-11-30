Create a basic Vehicle constructor function that initializes properties like brand, model, speed, and fuelType.

Using the prototype, add common methods to the Vehicle object like accelerate(), brake(), and refuel().

accelerate() should increase the speed of the vehicle.
brake() should decrease the speed.
refuel() should log a message indicating the vehicle is refueling.
Now, create a Car constructor function. The Car function should inherit properties and methods from the Vehicle object. Additionally, Car should have an extra property numberOfWheels and a method honk() that logs a honking sound.

Similarly, create an Airplane constructor function that inherits from Vehicle. It should have properties numberOfEngines and hasLandingGear and a method takeOff() that logs a message indicating the airplane is taking off.

Show how you would create a new instance of Car and Airplane, and demonstrate invoking their methods, ensuring that both types of vehicles can still accelerate, brake, and refuel through their prototype chain.