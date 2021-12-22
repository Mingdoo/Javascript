'use strict';

// Promise is a js obj for async operations.
// State: pending -> fulfilled or rejected
// Producer vs Consumer

// 1. Producer
// when new Pormise is created, the executor runs automatically.
// const promise = new Promise((resolve, reject) => {
//   // doing some heavy work (network, read files)
//   console.log('doing something');
//   setTimeout(() => {
//     // resolve('mandu');
//     reject(new Error('rejected'))
//   }, 2000);
// });

// 2. Consumers: then, catch, finally
// promise
//   .then((value) =>{
//   console.log(value);
//   })
//   .catch((err) => {
//     console.log(err)
//   })
//   .finally(() => {
//     console.log('finally')
//   })

// 3. promise chaining
const fetchNumber = new Promise((resolve, reject) => {
  setTimeout(() => resolve(1), 1000);
});

fetchNumber
  .then(num => num * 2)
  .then(num => num * 3)
  .then(num => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(num - 1);
      }, 1000)
    })
  })
  .then(num => console.log(num));