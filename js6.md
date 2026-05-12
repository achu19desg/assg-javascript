### JavaScript
## Assignment 6

# 1.	Write short notes on Array methods with a code example
# push()
```
Adds one or more elements to the end of an array and returns the new length of the array.

eg:
let fruits = ["Apple", "Banana","Watermelon"];
fruits.push("Orange"); 
console.log(fruits);

 output: ["Apple", "Banana", "Watermelon","Orange"]
```
# pop()
```
Removes the last element from an array and returns that element.

eg:
let fruits = ["Apple", "Banana","Watermelon","orange"];
fruits.pop("Orange"); 
console.log(fruits);

output: [ 'Apple', 'Banana', 'Watermelon' ]
```
# shift()
```
Removes the first element from an array and returns that removed element.

eg:
let cities = ["Delhi", "Mumbai", "Chennai"];
cities.shift()
console.log(cities); 

output: [ 'Mumbai', 'Chennai' ]
```
# unshift()
```
Adds elements to the beginning

eg:
let cities = ["Delhi", "Mumbai", "Chennai"];
cities.unshift("kerala")
console.log(cities); 

output: [ 'kerala', 'Delhi', 'Mumbai', 'Chennai'] 
```
# includes()
```
It is used to check whether a certain element exists in an array. 

eg:let animals = ["Dog", "Cat", "Elephant"];
console.log(animals.includes("Cat")); 
console.log(animals.includes("Tiger")); 

output: True
        False
```
# toString()
```
It converts the entire array into a comma-separated string. It does not change the original array.

eg:
let nums = [10, 20, 30];
let str=nums.toString();
console.log(str);
console.log(nums);
console.log(typeof(str));

output: 10,20,30
        [ 10, 20, 30 ]
        string
```
# reverse()
```
Reverses the array

eg:
let letters = ["A", "B", "C", "D","E"];
letters.reverse();
console.log(letters); 

output: [ 'E', 'D', 'C', 'B', 'A' ]
```
# join()
```
The join() method joins all elements of an array into a single string, using a specified separator. It does not change the original array.

eg:
let words = ["Hello", "World"];
let sentence = words.join(" ");
console.log(sentence); 

output: Hello World
```
# concat()
```
The concat() method is used to merge two or more arrays. It returns a new array and does not change the original arrays.

eg:
let stu_boy = ["John", "Paul","Steve"];
let stu_girl = ["Mary", "Anna","Jas"];
let students = stu_boy.concat(stu_girl);
console.log(students);

output: [ 'John', 'Paul', 'Steve', 'Mary', 'Anna', 'Jas' ]
```
# flat()
```
The flat() method creates a new array by flattening nested arrays into a single-level array.
It removes one or more levels of nesting inside an array.

eg:
let arr = [1, [2, [3, 4]], 5,[6,7]];
let flatArray = arr.flat(2);
console.log(arr)
console.log(flatArray);
console.log(arr[1][1])

output: [ 1, [ 2, [ 3, 4 ] ], 5, [ 6, 7 ] ]
        [
          1, 2, 3, 4,
          5, 6, 7
        ]
        [ 3, 4 ]
```
# slice()
```
The slice() method returns a shallow copy of a portion of an array into a new array.
It does not modify the original array.

eg:
let colors = ["Red", "Green", "Blue", "Yellow"];
let result = colors.slice(1, 4);
console.log(result); // ["Green", "Blue"]

output: [ 'Green', 'Blue', 'Yellow' ]
```
# splice()
```
The splice() method is used to add, remove, or replace elements in an array.
It modifies the original array.

eg:
let num = [1, 4, 5];
num.splice(1, 0, 2, 3,"four","ten");
console.log(num);

ouput: [
         1,     2,
         3,     'four',
         'ten', 4,
          5
       ]
```
# sort()
```
The sort() method is used to sort the elements of an array in place, it changes the original array.
By default, it sorts elements as strings in ascending order (A to Z).

eg:
let fruits = ["Banana", "Apple", "Mango"];
fruits.sort();
console.log(fruits); 
 
output: [ 'Apple', 'Banana', 'Mango' ]

let num = [100, 20, 5, 10];
num.sort((a, b) => a - b); 
console.log(num); 

ouput: [ 5, 10, 20, 100 ]
```
# fill()
```
The fill() method changes all elements in an array to a static value, from a start index to an end index.
It modifies the original array and returns it.

eg:
let num = [1, 2, 3, 4, 5];
num.fill(0);
console.log(num); 

output: [ 0, 0, 0, 0, 0 ]

let arr = [1, 2, 3, 4, 5];
arr.fill(9, 2); 
console.log(arr); 

output: [ 1, 2, 9, 9, 9 ]
```
















