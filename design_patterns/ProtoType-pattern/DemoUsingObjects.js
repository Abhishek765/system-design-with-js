const dog = {
  bark: (name) => {
    console.log(`${name} is barking...`);
  },
  walk: (name) => {
    console.log(`${name} is walking...`);
  },
};

const cat = {};
cat.__proto__ = dog; // now cat object can access the properties of dog even though it has no properties

cat.walk("snowbell");
