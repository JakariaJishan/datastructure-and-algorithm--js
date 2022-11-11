// last in first out (lifo)

let guest = [];
guest.push("jack");
guest.push("joe");
guest.pop();
console.log(guest);

//with class

class Stack {
  constructor() {
    this.stack = [];
  }
  add(item) {
    this.stack.push(item);
  }
  remove() {
    if (this.stack.length) {
      this.stack.pop();
    }
  }
}
const guest2 = new Stack();
guest2.add("jack");
guest2.add("jishan");
guest2.add("joe");
console.log(guest2.stack);
guest2.remove();
console.log(guest2.stack);
