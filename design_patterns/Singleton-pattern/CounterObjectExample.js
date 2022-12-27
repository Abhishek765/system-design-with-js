// Making singleton Object
let currCounter = 0;
const counter = {
  counterId: 1,
  getCount() {
    return currCounter;
  },
  increment() {
    return ++currCounter;
  },
  decrement() {
    return --currCounter;
  },
};

// 2. Restrict Modification of Instance Object
Object.freeze(counter);
export { counter }; // we can use this object as global counter
