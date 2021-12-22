'use strict';

const arr1 = new Array();
const arr2 = [1, 2];

//2. index pos

const fruits = ['🥭', '🍎', '🍓', '🍅']
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);

//3. index loop

console.clear();
for (let i=0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

console.clear();
fruits.forEach((fruit) => console.log(fruit));

//4. addition, deletion, copy
// push: add an item to the end
fruits.push('🌽');
console.log(fruits);

// pop: remove an item from the end
const a = fruits.pop();
console.log(a);
console.log(fruits);

// unshift: add an item to the beginning
fruits.unshift('!!')
console.log(fruits);

// shift: remove an item to the beginning
const b = fruits.shift();
console.log(b);
console.log(fruits);

// splice: remove an item by index position
fruits.splice(1,1)
console.log(fruits);

// combine two arrays
const newFruits = fruits.concat(['1','2'])
console.log(newFruits);

// 5. searching indexOf, includes
console.clear();
console.log(fruits);

const newfruits = fruits.concat(fruits)
console.log(newfruits);
console.log(newfruits.lastIndexOf('1'));