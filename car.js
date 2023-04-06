// Define a Car class that takes the type of car (Hatchback, Sedan, SUV) as a parameter
class Car {
    constructor(type) {
      this.type = type;
      this.services = [];    // Array of Service objects
    }
  
    // Method to add a service
    addService(service) {
      this.services.push(service);
    }
  
    // Method to calculate the bill for the car
    calculateBill() {
      let total = 0;
      let complimentaryCleaning = false;
  
      // Calculate the total bill
      for (let i = 0; i < this.services.length; i++) {
        total += this.services[i].getCost(this.type);
      }
  
      // Check for complimentary cleaning
      if (total > 10000) {
        complimentaryCleaning = true;
      }
  
      // Return the bill
      return {
        carType: this.type,
        services: this.services,
        total: total,
        complimentaryCleaning: complimentaryCleaning,
      };
    }
  }
  
  // Create an instance of the Car class
  class Service {
    constructor(code, name, costs) {
      this.code = code;
      this.name = name;
      this.costs = costs;
    }
  
    // Method to get the cost of a service
    getCost(carType) {
      if (carType === "Hatchback") {
        return this.costs[0];
      } else if (carType === "Sedan") {
        return this.costs[1];
      } else if (carType === "SUV") {
        return this.costs[2];
      } else {
        throw new Error("Invalid car type");
      }
    }
  }
  
  // Create some instances
  const basicService = new Service("BS01", "Basic Servicing", [2000, 4000, 5000]);
  const engineFixing = new Service("EF01", "Engine Fixing", [5000, 8000, 10000]);
  const clutchFixing = new Service("CF01", "Clutch Fixing", [2000, 4000, 6000]);
  const brakeFixing = new Service("BF01", "Brake Fixing", [1000, 1500, 2500]);
  const gearFixing = new Service("GF01", "Gear Fixing", [3000, 6000, 8000]);
  
  // Create an instance of the Car class
  const car = new Car("Sedan");

  
  // Add some services to the car
  car.addService(basicService);
  car.addService(engineFixing);
  car.addService(clutchFixing);
  car.addService(brakeFixing);
  car.addService(gearFixing);
  
  // Calculate the bill for the car
  const bill = car.calculateBill();
  
  // Print the bill
  console.log(`Type of Car – ${bill.carType}`);
  console.log("Service Codes –", bill.services.map((s) => s.code).join(", "));
  console.log(`Charges for Basic Servicing – ₹ ${bill.services[0].getCost(bill.carType)}`);
  console.log(`Charges for Engine Fixing – ₹ ${bill.services[1].getCost(bill.carType)}`);
  console.log(`Total Bill – ₹ ${bill.total}`);
  if (bill.complimentaryCleaning) {
    console.log("Complimentary cleaning provided");
  }
  


  //test("should add services to the car and calculate the bill",
  // test("should throw an error for an invalid car type",
  // test("should return the correct cost for a given car type",
  // test("should throw an error for an invalid car type",