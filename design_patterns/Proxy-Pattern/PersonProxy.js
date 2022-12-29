const person = {
  name: "Abhishek Vishwkarma",
  age: 23,
};

// Person Proxy object
const personProxy = new Proxy(person, {
  get: (obj, key) => {
    return `The value of ${key} is ${obj[key]}`;
  },
  set: (obj, key, value) => {
    console.log(`Changed ${key} from ${obj[key]} to ${value}`);
    obj[key] = value;
  },
});

// Person Proxy object with Reflect Object -> optional
const personProxyWithReflect = new Proxy(person, {
  get: (obj, key) => {
    return `The value of ${key} is ${Reflect.get(obj, key)}`;
  },
  set: (obj, key, value) => {
    console.log(`Changed ${key} from ${Reflect.get(obj, key)} to ${value}`);
    Reflect.set(obj, key, value);
  },
});

// we can do this way too (by sharing copying the reference -> shallow copy)
// But then we can't perform the proper validation at proxy object while getting or setting the property values
const personProxyWithShallow = person;

export { personProxy, personProxyWithReflect, personProxyWithShallow };
