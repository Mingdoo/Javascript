// 1. obj to json
let json = JSON.stringify(true);
// console.log(json)

json = JSON.stringify(['apple', 'banana']);
// console.log(json)

const rabbit = {
  name: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  symbol: Symbol('id'),
  jump: () => {
    console.log(`${this.name} can jump!`)
  }
}

json = JSON.stringify(rabbit, (key, value) => {
  console.log(key, value);
  return key === 'name'? 'mandu' : value;
});
console.log(json)

// 2. json to obj
// parse
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(key, value);
  return key === 'birthDate'? new Date(value) : value;
});
console.log(obj);

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate());

const a = '121'
console.log()