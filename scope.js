// 자바스크립트의 Scope에 대한 이해

// Scope: 변수 혹은 함수를 선언할 때, 해당 변수 또는 함수가 유효한 범위
// Scope는 총 3가지 종류
    // 1. Global (전역) Scope: 코드의 모든 범위에서 사용 가능
    // 2. Function (함수) Scope: 함수 안에서만 사용 가능
    // 3. Block (블록) Scope: if, for, switch 등 특정 블록 내부에서만 사용 가능


// 예시를 통한 Scope 이해
/*
const value = 'hello!'; // Global Scope로 선언

function myFunction() {
    console.log('myFunction: '); // myFunction:
    console.log(value); // hello!
}

function otherFunction() {
    console.log('otherFunction: '); // otherFunction:
    const value = 'bye!'; // value 값을 'bye!'로 새로 선언 (value는 Function Scope이므로 otherFunction 내부에서만 유효한 값)
    console.log(value); // bye!
}

myFunction();
otherFunction();

console.log('global scope: '); // global scope:
console.log(value); // hello!
*/


// 예시 2
/*
const value = 'hello!';

function myFunction() {
    const value = 'bye!';
    const anotherValue = 'world';
    function functionInside() {
        console.log('functionInside: '); // functionInside:
        console.log(value); // bye!
        console.log(anotherValue); // world
    }
    functionInside();
}

myFunction()
console.log('global scope: '); // global scope:
console.log(value); // hello!
console.log(anotherValue); // ReferenceError: anotherValue is not defined
*/


// 예시 3
/*
const value = 'hello!';

function myFunction() {
    const value = 'bye!';
    if (true) {
        const value = 'world';
        console.log('block scope: '); // block scope:
        console.log(value); // world
    }
    console.log('function scope: '); // function scope:
    console.log(value); // bye!
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!

// 위에서 const로 선언한 값은 Block Scope로 선언되므로 
// if문 같은 블록 내에서 새로운 변수/상수를 선언할 경우 해당 블록 내부에서만 사용 가능하며,
// 블록 밖의 범위에서 똑같은 이름을 가진 값이 있어도 영향을 주지 않음
*/


// var는 Function Scope로 선언되므로, if문 블록 내부에서 선언한 value 값이 블록 밖의 value에도 영향을 미침
/*
var value = 'hello!';

function myFunction() {
    var value = 'bye!';
    if (true) {
        var value = 'world';
        console.log('block scope: '); // block scope:
        console.log(value); // world
    }
    console.log('function scope: '); // function scope:
    console.log(value); // world
}

myFunction();
console.log('global scope: '); // global scope:
console.log(value); // hello!
*/


// Hosting: 잡자스크립트에서 아직 선언되지 않은 함수/변수를 "끌어올려서" 사용할 수 있는 자바스크립트의 작동 방식
myFunction();

function myFunction() {
    console.log('hello world');
}
// 위 코드에서 myFunction 함수를 선언하기 전에, myFunction()을 호출했지만 코드가 정상적으로 작동
// 이러한 현상을 Hosting이라고 함

// 반면, 아래 코드에서는 undefined가 출력됨
console.log(number);
var number = 2;

// const와 let은 Hosting이 발생하지 않고 에러가 발생
// 따라서 Hosting을 방지하기 위해 함수의 경우 꼭 선언 후에 호출하는 것이 중요하며,
// var 대신 const, let 위주로 사용하는 것이 좋음