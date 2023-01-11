// Use a central mediator object to handle communication between components

// Taking example of a Chat room which acts as a mediator between users to communicate

class ChatRoom {
  logMessage(user, message) {
    const sender = user.getName();
    console.log(`${new Date().toLocaleString()} [${sender}]: ${message}`);
  }
}

class User {
  constructor(name, chatRoom) {
    this.name = name;
    this.chatRoom = chatRoom;
  }

  getName() {
    return this.name;
  }

  sendMessage(message) {
    this.chatRoom.logMessage(this, message);
  }
}

const chatRoom = new ChatRoom();

const user1 = new User("Abhishek", chatRoom);
const user2 = new User("Abhi", chatRoom);

user1.sendMessage(`hi there ${user2.getName()}!`);
user2.sendMessage(`hi there ${user1.getName()}!`);
