// rest: 객체, 배열, 함수의 파라미터에서 사용 가능
// 객체에서의 rest
const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

const { color, ...rest } = purpleCuteSlime;
console.log(color); // purple
console.log(rest); // Object {name: "슬라임", attribute: "cute"}

// 또는
/*
const { color, ...cuteSlime } = purpleCuteSlime;
console.log(color); // purple
console.log(cuteSlime); // Object {name: "슬라임", attribute: "cute"}
*/

// 또는
/*
const { attribute, ...slime } = cuteSlime;
console.log(attribute); // cute
console.log(slime); // Object {name: "슬라임"}
*/


// 배열에서의 rest
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [one, ...rest] = numbers;

console.log(one); // 0
console.log(rest); // [1, 2, 3, 4, 5, 6]

// SystaxError: /src/rest.js: Unexpected token 38:40)
/*
const numbers = [0, 1, 2, 3, 4, 5, 6];

const [..rest, last] = numbers;
*/


// 함수 파라미터에서의 rest
// 예를 들어, 파라미터로 넣어준 모든 값들을 합하는 함수를 만들고 싶을 때 
// 함수의 파라미터가 몇 개가 될 지 모르는 상황에서 rest 파라미터를 사용하면 좋음
function sum(...rest) {
    return rest;
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // [1, 2, 3, 4, 5, 6]

// 위 코드에서 result가 가리키는 것은 함수에서 받아온 파라미터들로 이루어진 배열


function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const result = sum(1, 2, 3, 4, 5, 6);
console.log(result); // 21