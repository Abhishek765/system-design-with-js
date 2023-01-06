// Use observables to notify subscribers when an event occurs

class Observable {
  constructor() {
    this.observers = [];
  }

  // for adding the observer (subscriber)
  subscribe(subscriber) {
    this.observers.push(subscriber);
  }

  // for removing the observer (subscriber)
  unsubscribe(subscriber) {
    this.observers = this.observers.filter(
      (observer) => observer !== subscriber
    );
  }

  // Notify all observers about the data
  notify(data) {
    this.observers.forEach((observer) => observer(data));
  }
}

export default new Observable();
