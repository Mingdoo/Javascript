'use strict';

// hoisting: var, function declaration이 제일 위로 올라가는 것
// Javascript is synchronous
// execute the code block by order after hoisting

console.log('1');
setTimeout(() => {
  console.log('2');
}, 0);
console.log('3')

// synchronous callback
function printImmediately(print) {
  print();
}

printImmediately(() => {
  console.log('hello')
})
// asynchronous callback

function printWithDelay(print, timeout) {
  setTimeout(print, timeout);
}

printWithDelay(() => {
  console.log('1')
}, 2000)

//callback hell

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(() => {
      if (
        (id === 'mandu' && password ==='password')
      ) {
        onSuccess(id);
      } else {
        onError(new Error('not found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(() => {
      if (user === 'mandu') {
        onSuccess({name: 'mandu', role: 'admin'})
      } else {
        onError(new Error('no access'))
      }
    }, 1000)
  }
}

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
      (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a ${userWithRole.role} role.`)
      },
      (error) => {
      console.log(error)
      }
    )
  },
  (error) => {
  console.log(error)
  }
)