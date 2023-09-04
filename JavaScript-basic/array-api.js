// Q1. make a string out of an array
{
    const fruits = ['apple', 'banana', 'orange'];
    const result = fruits.join('^');
    console.log(result); // apple^banana^orange
}

// Q2. make an array out of a string
{
    const fruits = '🍎, 🥝, 🍌, 🍒';
    const result = fruits.split(',');
    console.log(result); // ['🍎', ' 🥝', ' 🍌', ' 🍒']
}

// Q3. make this array look like this: [5, 4, 3, 2, 1]
{
    const array = [1, 2, 3, 4, 5];
    const result = array.reverse();
    console.log(result); // [5, 4, 3, 2, 1]
    console.log(array); // [5, 4, 3, 2, 1]
}

// Q4. make new array without the first two elements
{
    const array = [1, 2, 3, 4, 5];
    const result = array.slice(2, 5);
    console.log(result); // [3, 4, 5]
    console.log(array); // [1, 2, 3, 4, 5]
}
// splie: 배열 자체를 수정
// slice: 배열에서 원하는 부분만 return 하고 싶을 때


class Student {
    constructor(name, age, enrolled, score) {
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}
const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

// Q5. find a student with the score 90
{
    const result = students.find((student) => student.score === 90);
    console.log(result); // Student {name: 'C', age: 30, enrolled: true, score: 90}
}

// Q6. make an array of enrolled students
{
    const result = students.filter((student) => student.enrolled);
    console.log(result);
}

// Q7. make an array containing only the students' scores 
// result should be: [45, 80, 90, 66, 88]
{
    const result = students.map((student) => student.score);
    console.log(result); // [45, 80, 90, 66, 88]
}
// 배열 안의 요소들을 원하는 함수를 이용해서 다른 방식의 데이터로 만들고 싶을 때 map을 사용


// Q8. check if there is a student with the score lower than 50
{
    const result = students.some((student) => student.score < 50);
    console.log(result); // true

    const result2 = !students.every((student) => student.score >= 50);
    console.log(result2); // true
}

// Q9. compute students' average score
{
    const result = students.reduce((prev, curr) => prev + curr.score, 0);
    console.log(result); // 369
    console.log(result / students.length); // 73.8
}
// reduce: 배열의 각 요소를 순회하며 callback 함수의 실행 값을 누적하여 하나의 결과값을 반환


// Q10. make a string containing all the scores
// result should be: '45, 80, 90, 66, 88'
{
    const result = students
    .map((student) => student.score)
    .filter((score) => score >= 50)
    .join();
    console.log(result); // 80, 90, 66, 88
}

// Bonus! do Q10 sorted in ascending order
// result should be: '45, 66, 80, 88, 90'
{
    const result = students.map(student => student.score)
    .sort((a, b) => a - b)
    .join();
    console.log(result); // 45, 66, 80, 88, 90
}

{
    const result2 = students.map(student => student.score)
    .sort((a, b) => b - a)
    .join();
    console.log(result2); // 90,88,80,66,45
}