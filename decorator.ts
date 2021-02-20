abstract class Car {
  public description: string;

  public getDescription(): string {
    return this.description;
  }

  public abstract cost(): number;
}

abstract class CarOptions extends Car {
  decoratedCar: Car;
  public abstract getDescription(): string;
}

// ------------------------------ Cars ------------------------------
export class ModelS extends Car {
  public description = "Model S";

  public cost(): number {
    return 73000;
  }
}

export class ModelX extends Car {
  public description = "Model X";

  public cost(): number {
    return 77000;
  }
}

// ------------------------------ Options ------------------------------
export class EnhancedAutoPilot extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Enhanced Autopilot";
  }

  public cost(): number {
    return this.decoratedCar.cost() + 5000;
  }
}

export class SmartAirSuspension extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Smart Air Suspension";
  }

  public cost(): number {
    return this.decoratedCar.cost() + 2500;
  }
}

export class RearFacingSeats extends CarOptions {
  constructor(car: Car) {
    super();
    this.decoratedCar = car;
  }

  public getDescription(): string {
    return this.decoratedCar.getDescription() + ", Rear Facing Seats";
  }

  public cost(): number {
    return this.decoratedCar.cost() + 4000;
  }
}
