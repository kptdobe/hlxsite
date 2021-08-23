
class Context {
  constructor() {
    this.engines = [];
    this.listeners = [];
  }

  registerEngine(engine) {
    this.engines.push(engine);
    engine.init();
  }

  resolve(id) {
    return this.engines.filter((engine) => engine.resolve(id)).length > 0;
  }

  addListener(l) {
    this.listeners.push(l);
  }

  update() {
    this.listeners.forEach(l => l.call());
  }
}

export default new Context();