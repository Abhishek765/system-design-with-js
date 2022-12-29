import {
  personProxy,
  personProxyWithReflect,
  personProxyWithShallow,
} from "./PersonProxy.js";

// Normal Proxy object
// console.log(personProxy.name);
// personProxy.age = 24;

// Proxy object with Reflect object
console.log(personProxyWithReflect.age);
personProxyWithReflect.name = "John";

// Object with Shallow copy 
console.log(personProxyWithShallow.age);
personProxyWithShallow.name = "John";
