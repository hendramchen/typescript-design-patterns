// interface
interface Subject {
  registerObserver(o: Observer);
  removeObserver(o: Observer);
  notifyObservers();
}

interface Observer {
  update(temperature: number);
}

// ------------------------------------------------------
export class WeatherStation implements Subject {
  private observers: Observer[] = [];
  private temperature: number;

  registerObserver(o: Observer) {
    this.observers.push(o);
  }

  removeObserver(o: Observer) {
    let index = this.observers.indexOf(o);
    this.observers.splice(index, 1);
  }

  notifyObservers() {
    for (let observer of this.observers) {
      observer.update(this.temperature);
    }
  }

  setTemperature(temp: number) {
    console.log("WeatherStation: new temperature measurement: " + temp);
    this.temperature = temp;
    this.notifyObservers();
  }
}

// ------------------------------------------------------
export class TemperatureDisplay implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    console.log("TemperatureDisplay: I need to update my display");
  }
}

export class Fan implements Observer {
  private subject: Subject;

  constructor(weatherStation: Subject) {
    this.subject = weatherStation;
    weatherStation.registerObserver(this);
  }

  update(temperature: number) {
    if (temperature > 25) {
      console.log("Fan: Its hot here, turning myself on...");
    } else {
      console.log("Fan: Its nice and cool, turning myself off...");
    }
  }
}
