const Queue = require('../queue/Queue');
const store = require('../../store');


const people = new Queue();
store.people.forEach(person => people.enqueue(person));


module.exports = {
  get() {
    console.log(people.all())
    return people.all();
  },

  enqueue(person) {
    return people.enqueue(person);
  },

  dequeue() {
    return people.dequeue();
  }
};