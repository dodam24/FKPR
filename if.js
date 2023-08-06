// 특정 값이 여러 값 중 하나인지 확인해야 할 때
function inAnimal(name) {
    const animals = ['고양이', '개', '거북이', '너구리'];
    return animals.includes(name);
}

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false


// 화살표 함수로 작성
const isAnimal = name => ['고양이', '개', '거북이', '너구리'].includes(name);

console.log(isAnimal('개')); // true
console.log(isAnimal('노트북')); // false


// 값에 따라 다른 결과물을 반환 해야 할 때
function getSound(animal) {
    switch(animal) {
        case '개':
            return '멍멍';
        case '고양이':
            return '야옹';
        case '참새':
            return '짹짹';
        case '비둘기':
            return '구구';
        default:
            return '...?';
    }
}

console.log(getSound('개')); // 멍멍
console.log(getSound('비둘기')); // 구구

// better simple code
function getSound(animal) {
    const sounds = {
        개: '멍멍',
        고양이: '야옹',
        참새: '짹짹',
        비둘기: '구구'
    };
    return sounds[animal] || '...?';
}

console.log(getSound('개')); // 멍멍
console.log(getSound('비둘기')); // 구구


// 값에 따라 실행해야 하는 코드 구문이 다를 때
function makeSound(animal) {
    const tasks = {
        개() {
            console.log('멍멍');
        },
        고양이() {
            console.log('고양이');
        },
        비둘기() {
            console.log('구구');
        }
    };
    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
}

getSound('개');
getSound('비둘기');