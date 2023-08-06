// 함수의 기본 파라미터
// 원의 넓이
/*
function calculateCircleArea(r) {
    return Math.PI * r * r;
}

const area = calculateCircleArea(4);
console.log(area); // 50.26548245743669
*/
// Math.PI는 원주율 파이 값


// 위 함수에서 r 값이 주어지지 않았을 경우, 기본 값으로 1을 사용하도록 설정
/*
function calculateCircleArea(r) {
    const radius = r || 1;
    return Math.PI * radius * radius;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
*/


// ES6
/*
function calcudlateCircleArea(r = 1) {
    return Math.PI * r * r;
}

const area = calculateCircleArea();
console.log(area); // 3.141592653589793
*/


// 화살표 함수
function calculateCircleArea = (r = 1) => Math.PI * r * r;

const area = calculateCircleArea();
console.log(area); // 3.141592653589793