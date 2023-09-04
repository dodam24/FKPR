// Function
// - fundamental building block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) { body... return; }
// one function === one thing
// naming: doSomething, command, verb
// e.g. createCardAndPoint -> createCard, createPoint
// function is object in JS
function printHello() {
    console.log('Hello'); // Hello
}
printHello();

function log(message) {
    console.log(message); 
}
log('Hello@'); // Hello@
log(1234); // 1234


// 2. Parameters
// premitive parameters: passed by value
// object parameters: passed by reference
function changeName(obj) {
    obj.name = 'coder';
}
const ellie = { name: 'ellie '};
changeName(ellie);
console.log(ellie); // {name: "coder"}


// 3. Default parameters (added in ES6)
function showMessage(message, from = 'unknown') {
    console.log(`${message} by ${from}`);  // Hi! by unknown
}
showMessage('Hi!');


// 4. Rest Parameters (added in ES6)
function printAll(...args) { // ...은 배열을 의미
    for (let i = 0; i < args.length; i++) {
        console.log(args[i]);
    }

    // 위 코드와 동일
    for (const arg of args) {
        console.log(arg);
    }

    // 위 코드와 동일
    args.forEach((arg) => console.log(arg));
}
printAll('dream', 'coding', 'ellie'); // 각각 한 줄씩 출력


// 5. Local scope
let globalMessage = 'global'; // global variable
function printMessage() {
    let message = 'hello';
    console.log(message); // local variable
    console.log(globalMessage);
    function printAnother() {
        console.log(message);
        let childMessage = 'hello';
    }
    console.log(childMessage); // error
}
printMessage();


// 6. Return a value
function sum(a, b) {
    return a + b;
}
const result = sum(1, 2); // 3
console.log(`sum: ${sum(1, 2)}`); // sun: 3


// 7. Early return, early exit
// bad
function upgradeUser(user) {
    if (user.point > 10) {
        // long upgrade logic...
    }
}

// good
function upgradeUser(user) {
    if (user.point <= 10) {
        return;
    }
    // long upgrade logic...
}



// First-class function
// function are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions.
// can be returned by another function

// 1. Function expression
// a function declaration can be called earlier than it is defined. (hoisted)
// a function expression is created when the execution reaches it.
const print = function () { // anonymous function
    console.log('print');
};
print(); // print
const printAgain = print;
printAgain(); // print
const sumAgain = sum;
console.log(sumAgain(1, 3)); // 4


// 2. Callback function using function expression
function randomQuiz(answer, printYes, printNo) {
    if (answer === 'love you') {
        printYes();
    } else {
        printNo();
    }
}
// anonymous function
const printYes = function () {
  console.log('yes!');  
};

// named function
// better debugging in debugger's stack traces
// recursions
const printNo = function () {
    console.log('no!');
};
randomQuiz('wrong', printYes, printNo); // no!
randomQuiz('love you', printYes, printNo); // yes!

// Arrow function
// always anonymous

// const simplePrint = function () {
//     console.log('simplePrint!');
// };
const simplePrint = () => console.log('simplePrint!');

// const add = function (a, b) {
//     return a + b;
// }
const add = (a, b) => a + b;

const simpleMultiply = (a, b) => {
    // do something more
    return a * b;
};


// IIFE: immediately Invoked Function Expression (선언과 동시에 함수를 호출)
(function hello() {
    console.log('IIFE');
})();
