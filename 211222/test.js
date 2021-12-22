// Nullish coalescing operator

function printMessage(text) {
  const message = text ?? 'Nothing to display';
  console.log(message);
}

printMessage('Hello');
printMessage(undefined);

// object destructuring

const person = {
  name: 'mandu',
  age: 26,
};

function displayPerson(person) {
  const {name, age} = person;
  console.log(name, age);
}

displayPerson(person)

// Spread syntax
const item = {
  type: '1',
  size: 'M',
};

const detail = {
  price: 10,
  made: 'korea',
};

const newItem = Object.assign(item, detail);
console.log(newItem);

const shirt = {
  ...item,
  ...detail,
  price: 40,
  a: '1'
};

console.log(shirt)

// optional chaining

function displaySomething(person) {
  const title = person.job?.title ?? "no job";
  console.log(title);
}

displaySomething(person)

