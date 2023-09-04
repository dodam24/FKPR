// 배열 내장함수: 배열과 관련된 다양한 내장 함수들

// reduce 함수를 이용해서 배열의 총합 구하기
/*
const numbers = [1, 2, 3, 4, 5];
let sum = 0;
numbers.forEach(n => {
    sum += n;
});
console.log(sum); // 15
*/


// reduce 함수를 이용해서 평균 계산하기
const numbers = [1, 2, 3, 4, 5];
let sum = numbers.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0);

console.log(sum); // 3