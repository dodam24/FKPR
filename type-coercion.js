// 타입 변환(Type coercion)

var x = 10;

// 암묵적 타입 변환 (or 타입 강제 변환) : 자바스크립트 엔진이 context를 고려하여 암묵적 타입 변환을 실행
// 숫자 타입 x의 값을 바탕으로 새로운 문자열 타입의 값을 생성해 표현식을 평가
var str = x + '';

console.log(typeof str, str); // string 10

// 변수 x의 값이 변경된 것은 아니다.
console.log(x); // 10



// 명시적 타입 변환 (or 타입 캐스팅) : 개발자의 의도에 의해 명시적으로 타입을 변경
var str = x.toString(); // 숫자를 문자열로 타입 캐스팅
console.log(typeof str);  // string


// 문자열 타입으로 변환
  // 1. String 생성자를 new 연산자 없이 호출
  console.log(String(1)); // "1"

  // 2. Object.prototype.toString 메소드를 사용
  console.log((1).toString());  // "1"

  // 3. 문자열 연결 연산자를 이용
  console.log(1 + '');  // "1"


// 숫자 타입으로 변환
  // 1. Number 생성자 함수를 new 연산자 없이 호출
  console.log(Number('0')); // 0
  console.log(Number(true));  // 1
  console.log(Number(false)); // 0

  // 2. parseInt, parseFloat 함수를 사용
  console.log(parseInt('0')); // 0
  console.log(parseFloat('10.53')); // 10.53

  // 3. + 단항 연결 연산자를 이용
  console.log(+'0');  // 0
  console.log(+true); // 1

  // 4. * 산술 연산자를 이용
  console.log('-1' * 1);  // -1
  console.log(true * 1);  // 1
