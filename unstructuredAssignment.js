// 비구조화 할당 (구조분해) 문법
/*
const object = { a: 1, b: 2 };

const { a, b } = object;

console.log(a); // 1
console.log(b); // 2
*/

// 함수의 파라미터에서도 비구조화 할당이 가능함
/*
const object = { a: 1, b: 2 };

function print({ a, b }){
    console.log(a);
    console.log(b);
}
*/

// 비구조화 할당 시 기본값 설정
// 예를 들어, 만약 b값이 주어지지 않았다면 b값에 기본 값을 줄 수 있음
/*
const object = { a: 1 };

function print({ a, b = 2 }) {
    console.log(a);
    console.log(b);
}

print(object);
// 1
// 2
*/

// 위와 동일
const object = { a: 1 };
const { a, b = 2 } = object;

console.log(a); // 1
console.log(b); // 2


// 비구조화 할당 시 이름 바꾸기 (비구조화 할당 과정에서 선언할 값의 이름 변경)
/*
const animal = {
    name: '멍멍이',
    type: '개'
};

const nickname = animal.name; // animal.name 값을 nickname 값에 담음

console.log(nickname); // 멍멍이
*/

// 이름이 다를 경우, : 문자를 이용해서 이름을 변경
// animal 객체 안에 있는 name을 nickname이라고 선언
const animal = {
    name: '멍멍이',
    type: '개'
};

const { name: nickname } = animal
console.log(nickname);


// 배열 비구조화 할당
// 배열 안에 있는 원소를 다른 이름으로 새로 선언해주고 싶을 때 사용
/*
const array = [1, 2];
const [one, two] = array;

console.log(one);
console.log(two);
*/

// 기본값 지정
const array = [1];
const [one, two = 2] = array;

console.log(one);
console.log(two);


// 깊은 값 비구조화 할당 (객체 깊숙한 곳에 들어있는 값을 꺼내기)
const deepObject = {
    state: {
        information: {
            name: 'velopert',
            languages: ['korean', 'english', 'chinese']
        }
    },
    value: 5
};

// 위에서 name, language, value 값들을 밖으로 꺼내고 싶은 경우
// 첫 번째: 비구조화 할당 문법을 2번 사용
/*
const { name, languages } = deepObject.state.information;
const { value } = deepObject;

const extracted = {
    name,
    languages,
    value
};

console.log(extracted); // {name: "velopert", languages: Array[3], value: 5}
*/

// 두 번째: 한 번에 모두 추출
const {
    state: {
        information: { name, languages }
    },
    value
} = deepObject;

const extracted = {
    name,
    languages,
    value
};

console.log(extracted);