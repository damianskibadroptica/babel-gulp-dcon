module.exports = class {
  constructor(brand, model, engine) {
    this.brand = brand;
    this.model = model;
    this.engine = engine;
  }

  getBrand() {
    return this.brand;
  }

  getModel() {
    return this.model;
  }

  getEngine() {
    return this.engine;
  }

  showDetails() {
    return this.brand + " " + this.model + " " + this.engine;
  }
};
