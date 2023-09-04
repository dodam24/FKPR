// JSON
// JavaScript Object Notation

// 1. Object to JSON
// stringify(obj)
let json = JSON.stringify(true);
console.log(json); // true

json = JSON.stringify(['apple', 'banana']); 
console.log(json); // ["apple', "banana]

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${name} can jump!`);
    },
};

json = JSON.stringify(rabbit);
console.log(json); // {"name":"tori","color":"white","size":null,"birthDate":"2023-08-14T08:30:22.077Z"}

json = JSON.stringify(rabbit, ['name', 'color', 'size']); 
console.log(json); // {"name":"tori","color":"white","size":null}

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return value; // {"name":"tori","color":"white","size":null,"birthDate":"2023-08-14T08:37:03.245Z"}
    // return key === 'name' ? 'ellie' : value; // {"name":"ellie","color":"white","size":null,"birthDate":"2023-08-14T08:42:34.204Z"}
});
console.log(json); //

// json.js:29
// key: , value: [object Object]
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2023-08-14T08:37:03.245Z
// key: jump, value: () => {
//         console.log(`${name} can jump!`);
//     }


// 2. JSON TO Object
// parse(json)
console.clear();
json = JSON.stringify(rabbit);
// const obj = JSON.parse(json);
// console.log(obj); // {name: 'tori', color: 'white', size: null, birthDate: '2023-08-14T08:44:14.552Z'}
rabbit.jump(); // can jump!
// obj.jump(); // TypeError: obj.jump is not a function 

console.log(rabbit.birthDate.getDate()); // 14
// console.log(obj.birthDate); // 2023-08-14T09:13:24.294Z


const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj); // {name: 'tori', color: 'white', size: null, birthDate: Mon Aug 14 2023 18:18:52 GMT+0900 (한국 표준시)}

// json.js:60
// key: name, value: tori
// key: color, value: white
// key: size, value: null
// key: birthDate, value: 2023-08-14T09:18:25.301Z
// key: , value: [object Object]

console.log(rabbit.birthDate.getDate()); // 14
console.log(obj.birthDate.getDate()); // 14