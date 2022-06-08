# Javascript

- var, let, const의 차이

var는 선언한 후 다시 선언할 수 있다.

var는 선언하기 전에 사용할 수 있다. 

변수는 컴파일 단계에서 최상위로 끌어 올린 것 처럼 선언을 하는데(호이스팅), const와 let은 temporal dead zone에서 사용할 수 없도록 하는데, 이는

```javascript
let age = 30;
function showAge() {
    console.log(age);
    
    let age = 20;
}

showAge();
```

위와 같은 상태에서 console.log 부분에서 tdz에 걸리게 된다.



const, let은 블록 스코프 변수이지만 var는 함수 스코프 변수이다.

```javascript
const age = 30;
if (age > 20) {
    var text = "adult";
}

console.log(text) // "adult"
```



- 생성자 함수

```javascript
function User(name, age) {
	// new를 붙이면 //부분이 실행됨
    
	// this = {}

    this.name = name;
    this.age = age;
    this.sayName = function(){
    	console.log(this.name)
    }
    
    // return this
}

let user1 = new User("Mandu", 27);

console.log(user1); // User {name: "Mandu", age: "27"}
user1.sayName(); // "Mandu"
```



- computed property

```javascript
let a = 'age';

const user = {
    name: "Mandu",
    [a]: 27
}

console.log(user) // {name: "Mandu", age: 27}
```



- Object helper methods

```javascript
const user = {
    name: "Mandu",
    age: 27
}

let newUser = user // 절대 안됨. call by reference! 조심.

// 이렇게 하자

let newUser = Object.assign({}, user)
// different reference value
```

위 처럼 Object.assign() 과 같이 `assign`, `values`, `entries`, `fromEntries`, `keys` 와 같은 메소드가 존재한다.



- Symbol

Number, String, undefined, null, bool, `Symbol`

```javascript
const id = Symbol('id')

const id2 = Symbol('id')
// Symbol은 유일성을 보장한다.

id === id2 // false
id == id2 // false

const user = {
    name: "Mandu",
    age: 27,
    [id]: "dev"
};

console.log(Object.keys(user)) // Symbol key는 은닉된다.

// 그렇다고 무조건 숨길 수는 없음.

let myId = Symbol.for('myId') // 전역 심볼
let myId2 = Symbol.for('myId')

myId === myId2 // true

// 전역 Symbol은 keyFor로 불러올 수 있음

myId.keyFor() // "myId"

// 전역 Symbol이 아닌 경우??

id.description // "id"
```

