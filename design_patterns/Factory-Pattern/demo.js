//! Use a factory function in order to create objects

//! 1st approach Arrow function which accepts some user details and returns a new object each time it is called
const createUser = ({ firstName, lastName, email }) => ({
  firstName,
  lastName,
  email,
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
});

const user1 = createUser({
  firstName: "John",
  email: "John@example.com",
  lastName: "Smith",
});

const user2 = createUser({
  firstName: "Abhishek",
  email: "abhishek@example.com",
  lastName: "Vishwakarma",
});

//! 2nd approach -> above code is not memory efficient as each time it returns new object, instead we can create object instances which share a Single ProtoType
//! For Example

class User {
  constructor({ firstName, lastName, email }) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const userInstance1 = new User({
  firstName: "John",
  lastName: "Doe",
  email: "john@doe.com",
});

const userInstance2 = new User({
  firstName: "Jane",
  lastName: "Doe",
  email: "jane@doe.com",
});
