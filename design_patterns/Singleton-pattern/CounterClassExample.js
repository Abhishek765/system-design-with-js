// Making singleton global instance -> Class Implementation
let instance;
let counter = 0;

class Counter {
  constructor() {
    if (instance) throw new Error("You can only create one instance!");
    instance = this; // creating a single instance
  }

  getInstance() {
    return this;
  }

  getCount() {
    return counter;
  }

  increment() {
    return ++counter;
  }

  decrement() {
    return --counter;
  }
}
// // 1. Single Instance creation
// const counterObj1 = new Counter();
// const counterObj2 = new Counter(); // NOTE: This will throw error

// 2. Restrict Modification of Instance Object
const singletonCounter = Object.freeze(new Counter());
export default singletonCounter;
