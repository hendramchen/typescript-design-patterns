// Import stylesheets
import "./style.css";
import { ModelS, SmartAirSuspension, RearFacingSeats } from "./decorator";
import { WeatherStation, TemperatureDisplay, Fan } from "./observer";
import {
  BlurayPlayer,
  Amplifier,
  Lights,
  TV,
  PopcornMaker,
  HomeTheaterFacade,
} from "./facade";
import { iPhone7, LightningToMicroUSBAdapter } from "./adapter";
import { Order } from "./state";

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById("app");

// ------------------------------ Configure our Tesla! ------------------------------
let elements = "<h1>TypeScript Design Pattern</h1>";
elements += `<ul>
<li>Decorator Pattern</li>
<li>Observer Pattern</li>
<li>Facade Pattern</li>
<li>Adapter Pattern</li>
<li>State Pattern</li>
</ul>`;
appDiv.innerHTML = elements;
//=========== Decorator Pattern ===========
let myTesla = new ModelS();
myTesla = new SmartAirSuspension(myTesla);
myTesla = new RearFacingSeats(myTesla);
console.log("======= Decorator Pattern =======");
console.log(myTesla.cost());
console.log(myTesla.getDescription());

//=========== Observer Pattern ===========
let weatherStation = new WeatherStation();
let tempDisplay = new TemperatureDisplay(weatherStation);
let fan = new Fan(weatherStation);
console.log("======= Observer Pattern =======");
weatherStation.setTemperature(20);
console.log("--------------------");
weatherStation.setTemperature(30);

//=========== Facade Pattern ===========
let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcornMaker = new PopcornMaker();

let hometheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcornMaker);
hometheater.watchMovie();

//=========== Adapter Pattern ===========
let iphone = new iPhone7();
let chargeAdaptor = new LightningToMicroUSBAdapter(iphone);
chargeAdaptor.useMicroUSB();

//=========== State Pattern ===========
let order = new Order();
order.getCurrentState().verifyPayment();
order.getCurrentState().shipOrder();
order.getCurrentState().cancelOrder();
console.log("Order state: " + (<any>order.getCurrentState()).constructor.name);
