// for-in문
// 객체(배열 포함)에 포함된 모든 프로퍼티에 대해 루프를 수행할 수 있다.

var person = {
  'first-name': 'Ung-mo',
  'last-name': 'Lee',
  gender: 'male'
};

// prop에 객체의 프로퍼티 이름이 반환된다. 단, 순서는 보장되지 않는다.
for (var prop in person) {
  console.log(prop + ': ' + person[prop]);
}

/*
first-name: Ung-mo
last-name: Lee
gender: male
*/

var array = ['one', 'two'];

// index에 배열의 경우 인덱스가 반환된다.
for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
*/

// for-in문은 객체의 문자열 키(key)를 순회하기 위한 문법으로, 배열에는 사용하지 않는 것이 좋다.
  // 1. 객체의 경우, 프로퍼티의 순서가 보장되지 않는다.
  // 2. 배열 요소들만을 순회하지 않는다.

// 배열 요소들만을 순회하지 않는다.
var array = ['one', 'two'];
array.name = 'my array';

for (var index in array) {
  console.log(index + ': ' + array[index]);
}

/*
0: one
1: two
name: my array
*/


// 이와 같은 for-in문의 단점을 극복하기 위해 for-of문이 추가되었다.
const array = [1, 2, 3];
array.name = 'my array';

for (const value of array) {
  console.log(value);
}

/*
1
2
3
*/

for (const [index, value] of array.entries()) {
  console.log(index, value);
}

/*
0 1
1 2
2 3
*/