// 프로토타입
// 객체 생성자: 함수를 통해서 새로운 객체를 만들고 그 안에 넣고 싶은 값 혹은 함수들을 구현할 수 있게 해줌
/*
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
    this.say = function() {
        console.log(this.sound);
    };
}

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹
*/

// 프로토타입: 같은 객체 생성자 함수를 사용하는 경우, 특정 함수 또는 값을 재사용 할 수 있음
        // 객체 생성자 함수 아래애 .prototype.[원하는키] = 코드 를 입력하여 설정
/*
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;

const dog = new Animal('개', '멍멍이', '멍멍');
const cat = new Animal('고양이', '야옹이', '야옹');

dog.say();
cat.say();

console.log(dog.sharedValue);
console.log(cat.sharedValue);
*/

// 객체 생성자 상속받기
// 예를 들어 Cat과 Dog 라는 새로운 객체 생성자를 만든다고 가정할 때, 해당 객체 생성자들에서 Animal의 기능을 재사용하는 경우
function Animal(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
}

Animal.prototype.say = function() {
    console.log(this.sound);
};
Animal.prototype.sharedValue = 1;


function Dog(name, sound) {
    Animal.call(this, '개', name, sound);
}
Dog.prototype = Animal.prototype;


function Cat(name, sound) {
    Animal.call(this, '고양이', name, sound);
}
Cat.prototype = Animal.prototype;


const dog = new Dog('멍멍이', '멍멍');
const cat = new Cat('야옹이', '야옹');

dog.say(); // 멍멍
cat.say(); // 야옹