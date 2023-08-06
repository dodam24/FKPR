// ES6 - spread
// 객체 혹은 배열을 펼치기
/*
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    name: '슬라임',
    attribute: 'cute'
};

const purpleCuteSlime = {
    name: '슬라임',
    attribute: 'cute',
    color: 'purple'
};

console.log(slime);
console.log(cuteSlime);
console.log(purpleCuteSlime);
*/

// 위 코드를 spread 문법을 사용하여 작성
const slime = {
    name: '슬라임'
};

const cuteSlime = {
    ...slime,
    attribute: 'cute'
};

const purpleCuteSlime = {
    ...cuteSlime,
    color: 'purple'
};

console.log(slime); // Object {name: "슬라임"}
console.log(cuteSlime); // Object {name: "슬라임", attribute: "cute"}
console.log(purpleCuteSlime); // Object {name: "슬라임", attribute: "cute", color: "purple"}

// spread 연산은 배열에서도 사용
const animals = ['개', '고양이', '참새'];
const anotherAnimals = [...animals, '비둘기'];
console.log(animals); // ["개", "고양이", "참새"]
console.log(anotherAnimals); // ["개", "고양이", "참새", "비둘기"]

// 배열에서 spread 연산자를 여러 번 사용 가능
const numbers = [1, 2, 3, 4, 5];

const spreadNumbers = [...numbers, 1000, ...numbers];
console.log(spreadNumbers); // [1, 2, 3, 4, 5, 1000, 1, 2, 3, 4, 5]


// 함수 인자와 spread
const myFunction(a) { // 여기서 a는 파라미터
    console.log(a); // 여기서 a는 인자
}

myFunction('hello world'); // 여기서 'hello world'는 인자

// 함수에서 값을 읽을 때, 그 값들을 '파라미터' 라고 부르고
// 함수에서 값을 넣어줄 때, 그 값들을 '인자' 라고 부름

// 배열 안에 있는 원소들을 모두 파라미터로 넣어주고 싶을 때
/*
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(
    numbers[0],
    numbers[1],
    numbers[2],
    numbers[3],
    numbers[4],
    numbers[5]
);
console.log(result);
*/

// 위 코드를 더욱 간단하게 작성하는 방법
function sum(...rest) {
    return rest.reduce((acc, current) => acc + current, 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
const result = sum(...numbers);
console.log(result);
