let helper = require("./helper/html.js");
let footer = require("./animations/footer.js");
let header = require("./animations/header.js");
let button = require("./events/button.js");
let Car = require("./class/car.js");

footer();
header();
button();


let car = new Car('Volkswagen', 'Passat B5 FL', '1.9 TDI');
helper.append('<hr /Class:<br />')
helper.append('Brand: ' + car.getBrand() + '<br />');
helper.append('Model: ' + car.getModel() + '<br />');
helper.append('Engine: ' + car.getEngine() + '<br />');
helper.append(car.showDetails() + '<br />');
