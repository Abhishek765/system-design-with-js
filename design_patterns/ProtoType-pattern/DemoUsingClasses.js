class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log(`${this.name} is barking...`);
  }
}

class SuperDog extends Dog {
  constructor(name) {
    super(name);
  }

  fly() {
    console.log(`${this.name} is flying...`);
  }
}

const dog1 = new SuperDog("Daisy");
dog1.bark(); // this will find the bark() from its prototypal chain, i.e it walks to SuperDog->Dog
dog1.fly();
