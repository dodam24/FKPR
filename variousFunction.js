// 함수 선언문
function square(number) {
  return number * number
}

// 함수 표현식
var square = function(number) {
  return number * number;
};

// Function 생성자 함수 (일반적으로 사용 X)
new Function(arg1, arg2, ... argN, functionBody)

var square = new Function('number', 'return number * number');
console.log(square(10));  // 100


/* 
함수 호이스팅 :
  함수 선언문의 경우, 함수 선언의 위치와 상관없이 코드 내 어느 곳에서든 호출이 가능하다.
  이것을 '함수 호이스팅'이라고 한다.
  함수 선언, 초기화, 할당이 한 번에 이루어진다.

  함수 표현식의 경우, 변수 호이스팅이 발생한다.
  변수 호이스팅은 변수 생성, 초기화, 할당이 분리되어 진행된다.
  호이스팅된 변수는 undefined로 초기화 되고, 실제 값의 할당은 할당문에서 이루어진다.
*/


/* 
  Call-by-value : 원시 타입 인수는 값에 의한 호출로 동작
    원시 타입 인수를 매개변수로 전달할 때, 매개변수에 값을 복사하여 함수로 전달
    따라서 값이 변경되어도 전달이 완료된 원시 타입 값은 변경 X

  Call-by-reference : 객체형 인수는 참조에 의한 호출로 동작
    참조 타입 인수를 매개변수로 전달할 때, 매개변수에 값이 복사되지 않고 객체의 참조값이 매개변수에 저장되어 함수로 전달
    따라서 객체의 값울 변경했을 때 전달되어진 참조형의 인수값도 같이 변경 O
*/


// 즉시 실행 함수(IIFE, Immediately Invoke Function Expression) : 함수의 정의와 동시에 실행되는 함수
  // 최초 한 번만 호출되며, 다시 호출할 수 없다. 최초 한번만 실행이 필요한 초기화 처리 등에 사용
  (function () {
    var a = 3;
    var b = 5;
    return a * b;
  } ());


// 내부 함수 : 함수 내부에 정의된 함수
  // 내부함수 child는 자신을 포함하고 있는 부모함수 parent의 변수에 접근 가능. but 부모함수는 자식함수의 변수에 접근 X
  function parent(param) {
    var parentVar = param;
    function child() {
      var childVar = 'lee';
      console.log(parentVar + ' ' + childVar);  // Hello lee
    }
    child();
    console.log(parentVar + ' ' + childVar);
  }
  parent('Hello');

  // 내부함수는 부모함수의 외부에서 접근 X
  function sayHello(name) {
    var text = 'Hello ' + name;
    var logHello = function() {
      console.log(text);
    }
    logHello();
  }

  sayHello('lee');  // Hello lee
  logHello('lee');  // logHello is not defined


// 재귀 함수 : 자기 자신을 호출하는 함수
  // 재귀 함수는 자신을 무한 연쇄 호출하므로 탈출 조건을 만들어야 한다.

    // 피보나치 수열 : 피보나치 수는 0과 1로 시작하며, 다음 피보나치 수는 바로 앞의 두 피보나치 수의 합이 된다.
    // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, ...
    function fibonacci(n) {
      if (n < 2) return n;
      return fibonacci(n-1) + fibonacci(n-2);
    }

    console.log(fibonacci(5));  // 5


    // 팩토리얼 : 팩토리얼은 1부터 자신까지의 모든 양의 정수의 곱이다.
    // n! = 1 * 2 * ... * (n-1) * n
    function factorial(n) {
      if (n < 2) return 1;
      return factorial(n-1) * n;
    }

    console.log(factorial(5));  // 120


// 콜백 함수 : 함수를 명시적으로 호출하는 방식이 아니라 특정 이벤트가 발생했을 때 시스템에 의해 호출되는 함수
  // 콜백 함수가 사용되는 대표적인 예: 이벤트 핸들러 처리
  /* 
  <!DOCTYPE html>
  <html>
  <body>
    <button id="myButton">Click me</button>
    <script>
      var button = document.getElementById('myButton');
      button.addEventListener('click', function() {
        console.log('button clicked!');
      });
    </script>
  </body>   
  </html>
  */

  // setTimeout()의 콜백 함수
    // 두 번째 매개변수에 전달된 시간이 경과되면 첫번째 매개변수에 전달한 콜백 함수가 호출된다.
    setTimeout(function () {
      console.log('1초 후 출력');
    }, 1000);
    // 콜백 함수는 주로 비동기식 처리 모델(Asynchronous processing model)에 사용된다.
    // 비동기식 처리 모델: 처리가 종료되면 호출될 함수(콜백함수)를 미리 매개변수에 전달하고, 처리가 종료되면 콜백함수를 호출
    // 콜백함수는 콜백 큐에 들어가있다가 해당 이벤트가 발생하면 호출된다.
    function doSomething() {
      var name = 'Lee';

      setTimeout(function () {
        console.log('My name is ' + name);
      }, 100);
    }

    doSomething();  // My name is Lee