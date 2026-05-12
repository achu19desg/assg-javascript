## JavaScript
## Assignment 9

# 1.	Write short notes on the below with code examples
```
while loop:
A while loop repeats a block of code as long as a condition is true.

example:

let i = 1;
while (i <= 5) {
    console.log(i);
    i++;
}
output:
1
2
3
4
5
```
```
do-while loop:
A do-while loop executes the block at least once, even if the condition is false.

example:

let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 5);

output:
1
2
3
4
5
```
```
for loop:
A for loop runs a block of code for a specific number of times.

example:
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

output:
1
2
3
4
5
```
```
for in loop:
Used to iterate over object properties (or array indexes).

example:
let student = {name: "John", age: 20, grade: "A"};

for (let key in student) {
    console.log(key + ": " + student[key]);
}

output:
name: John
age: 20
grade: A
```
```
for of loop:
Used to iterate over values in an iterable (arrays, strings, etc.).

example:
let numbers = [10, 20, 30];

for (let num of numbers) {
    console.log(num);
}

ouput:
10
20
30
```

# 2.	write a function that takes an array of numbers as an argument and returns the sum of its elements.
```
function sumArray(arr) {
    let sum = 0;
    for (let num of arr) {
        sum += num;
    }
    return sum;
}

console.log(sumArray([1, 2, 3, 4, 5]));
 
output:
15
```
# 3.	Create a function that filters strings in an array by their length
```
function filterByLength(arr, length) {
    return arr.filter(str => str.length === length);
}

console.log(filterByLength(["hi", "cat", "dog", "apple"], 3));

ouput:
["cat", "dog"]
```
# 4.	Create a function that returns a new array containing the square roots of each number in the original array [1,4,9,16,25](Math.sqrt())
```
function getSquareRoots(arr) {
    return arr.map(num => Math.sqrt(num));
}

console.log(getSquareRoots([1,4,9,16,25]));

output:
[1, 2, 3, 4, 5]
```

# 5.	Create an array with 5 student’s names. Then create a function that takes two parameters (allStudents and studentName). Iterate over all the students and find that specific user ‘studentName’
```
let students = ["Ajith", "Bobby", "Josh", "Emy", "Don"];

function findStudent(allStudents, studentName) {
    for (let student of allStudents) {
        if (student === studentName) {
            return studentName + " found!";
        }
    }
    return studentName + " not found!";
}

console.log(findStudent(students, "Josh"));
console.log(findStudent(students, "Michael"));

output:
Josh found!
Michael not found!
```
# 6.	Write a function that prints the number 1 to 100. But for multiples of 3, print Fizz instead of the number, and for multiples of 5, print Buzz. For the numbers that are multiples of both 3 and 5, print FizzBuzz(use while loop)
```
function fizzBuzz() {
    let i = 1;
    while (i <= 10) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
        i++;
    }
}

fizzBuzz();

output:
1
2
Fizz
4
Buzz
Fizz
7
8
Fizz
Buzz
```


