// undefined, null은 Falsy한 값이며, falsy한 값 앞에 느낌표를 붙여주면 true로 전환
/*
function print(person) {
    if (person === undefined || person === null) {
        console.log('person이 없습니다.');
        return;
    }
    console.log(person.name);
}

const person = null;
print(person);
*/

// 다음과 같이 축약해서 작성할 수 있음
function print(person) {
    if(!person) {
        console.log('person이 없습니다.');
        return;
    }
    console.log(person.name);
}

const person = null;
print(person);


// !(Falsy한 값) 
console.log(!undefined); // true
console.log(!null); // true
console.log(!0); // true
console.log(!''); // true
console.log(!NaN); // true

// !(Truthy한 값) 
console.log(!3); // false
console.log(!'hello'); // false
console.log(!['array?']); // false
console.log(![]); // false
console.log(!{ value: 1}); // false