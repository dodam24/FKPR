
// 클래스: ES6 에서부터 class라는 문법이 추가
/*
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() { // say라는 함수를 클래스 내부에 선언 (클래스 내부의 함수를 '메서드'라고 함 → 메서드는 자동으로 prototype으로 등록)
        console.log(this.sound);
    }
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', ' 야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹
*/

// class를 사용하면 다른 클래스를 쉽게 상속 가능
class Animal {
    constructor(type, name, sound) {
        this.type = type;
        this.name = name;
        this.sound = sound;
    }
    say() {
        console.log(this.sound);
    }
}

class Dog extends Animal {
    constructor(name, sound) {
        super('개', name, sound);
    }
}

class Cat extends Animal {
    constructor(name, sound) {
        super('고양이', name, sound);
    }
}

const dog = new Dog('멍멍이', '멍멍');
const dog2 = new Dog('왈왈이', '왈왈');
const cat = new Cat('야옹이', '야옹');
const cat2 = new Cat('냐옹이', '냐옹');

dog.say(); // 멍멍
dog2.say(); // 왈왈
cat.say(); // 야옹
cat2.say(); // 냐옹