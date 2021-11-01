/*
  [if문 연습]
  
  username 변수의 값에 따라 다른 메세지를 출력하세요.
  - 관리자(admin)일 경우 "관리자님 환영합니다."
  - 매니저(manager)일 경우 "매니저님 환영합니다."
  - 그 외 모든 경우 "{username}님 환영합니다"
*/
const username = 'managersdas'
if (username === 'admin'){
  console.log('hi admin')
}
else if (username === 'manager'){
  console.log('hi manager')
}
else{
  console.log('hi', username)
}




/*
  [switch문 연습]

  operator 변수의 값에 따라 다른 계산을 하는 조건을 작성하세요.
  - '+'는 두 숫자의 합을 출력합니다.
  - '-'는 두 숫자의 차이를 출력합니다.
  - '*'는 두 숫자의 곲을 출력합니다.
  - '/'는 두 숫자의 나눗셈 결과를 출력합니다.
  - 만약 위 4가지 경우에 해당하지 않는 operator라면,
    "유효하지 않은 연산자입니다."라는 메세지를 출력하세요.
*/

const operator = '+'
const a = 10
const b = 20

switch (operator){
  case '+':
    console.log(a+b)
    break
  case '-':
    console.log(a-b)
    break
  case '/':
    console.log(a/b)
    break
  case '*':
    console.log(a*b)
    break
  default:
    console.log('invalid')
}


