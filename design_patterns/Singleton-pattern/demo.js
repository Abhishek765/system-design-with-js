/* Class Way */
import singletonCounter from "./CounterClassExample.js";
import { counter } from "./CounterObjectExample.js";

console.log("----------------Class Output----------------");
console.log(`currCount: ${singletonCounter.getCount()}`);
console.log(`currCount after increment: ${singletonCounter.increment()}`);
console.log(`currCount after increment: ${singletonCounter.increment()}`);
console.log(`currCount after decrement: ${singletonCounter.decrement()}`);

/* Object Way */
// counter.counterId = 1; // This should Throw error as Object properties modification is restricted
console.log("----------------Object Output----------------");
console.log(counter.getCount());
console.log(counter.increment());
console.log(counter.decrement());

// In React -> we don't need Singletons as we have redux or context api to handle the state management
