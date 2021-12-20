# 211220

#### var를 쓰지 않는 이유

##### Hoisting
호이스팅이란 어디에 선언했는지 상관 없이 선언을 위로 끌어 올려주는 것을 말함.
var를 사용하면 문제가 발생

##### Block scope
블록 스코프를 무시하기 때문에 조심해야 함

```javascript
{
  var a;
  a = 4;
}
console.log(a)

// 결과는 4가 나옴(블록 스코프를 무시함)
```

### constant

const를 사용하면
- security
- thread safety
- reduece human mistakes

정리 : let(mutable), const(immutable )
