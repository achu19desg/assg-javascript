// let num = 35;
// if (num % 5 == 0 && num % 7 == 0)
// {
//     console.log("Num is divisible by both 5 and 7");
// }
//  else
// {
//     console.log("Num is NOT divisible by both 5 and 7");
// }


// let Tclass= 173;
// let attend_class = 99
// let attendence = attend_class*100/Tclass;
// if (attendence> 75)
// { console.log("yes");}
// else
// {
//     console.log("no");
// }


// let val = 12; 
// let size;
// if (val < 5) 
// {
//   size = "Tiny";
// }
// else if (val < 10)
// {
//   size = "Small";
// } 
// else if (val < 15) 
// {
//   size = "Medium";
// } 
// else if (val < 20) 
// {
//   size = "Large";
// } 
// else 
// {
//   size = "Huge";
// }
// console.log("Size:", size);




// let application = ["admin","subAdmin","testPrep","user"]
// let app = "admin"

// switch(app)
// {
//     case "admin":
//     console.log("gets full access");
//     break;

//     case "subAdmin":
//     console.log("gets access to create and delete courses");
//     break;
    
//     case "testPrep":
//     console.log("gets access to create and delete tests");
//     break;

//     case "user":
//     console.log("gets access to consume contents");
//     break;

//     default:
//         console.log("No access");
// }



// let temperature=100;
// if(temperature>98.6)
// {
//     console.log("Person have High temperature");
// }
// else
// {
//     console.log("Person have Normal temperature");
// }

// let Temp = 200; 
// let cond;

// if (Temp === 98.1) 
// {
//   cond = "Normal";
// }
//  else if (Temp < 98.1 || Temp > 99)
// {
//   cond = "Not normal";
// } 
// else 
// {
//   cond= "Slightly above normal";
// }

// console.log("Temperature:", Temp);
// console.log("Condition:", cond);

// let Temp = 200;
// let cond;

// if (Temp >= 98.0 && Temp <= 98.9) {
//   cond = "Normal";
// } else {
//   cond = "Not normal";
// }

// console.log("Temperature:", Temp);
// console.log("Condition:", cond);


// let ttl_Class = 20
// let attend_Class = 

// let attend_per = (attend_Class / ttl_Class) * 100;

// if (attend_per >= 75) 
// {
//   console.log("You can write the exam, Attendance:" + attend_per);
// } 
// else 
// {
//   console.log("You cannot write the exam,Attendance:" + attend_per);
// }

// let ttl_Class = 50;
// let attend_Class = 60;

// let attend_per = (attend_Class / ttl_Class) * 100;

// if (attend_per >= 75) {
//   console.log("You can write the exam. Attendance: " + attend_per + "%");
// } else {
//   console.log("You cannot write the exam. Attendance: " + attend_per + "%");
// }


// let Tclass = Number(prompt("Enter total number of classes: "));
// let attend_class = Number(prompt("Enter the number of classes attended: "));

// let attendance = (attend_class * 100) / Tclass;

// if (attendance > 75)
// {
//     console.log("Eligible to write exam");
// }
// else 
// {
//     console.log("Not eligible to write exam");
// }





    
//    let age=20;
//    if(age>=18)
//                     {
//                         console.log("can be voting");
//                     }
//                     else
//                     {
//                         console.log("cannot be voting");
//                     }

//             output:
//               can be voting

                 
// let str="javascript"
// let n= str.length
// console.log(n);

// let str = "javascript"
// let n = str[str.length-1]
// console.log(n);

// let name="javascript"
// console.log(name.slice(4,10));

// let arr=[[1,2],[3,4,5],[6,7],8,9]
// console.log(arr.flat());
// console.log(arr)

// let arr=[1,2,3,4,5,6,7,8,9]
// arr.fill("w", 2,5)
// console.log(arr);

//push
// let fruits = ["Apple", "Banana","watermelon"];
// fruits.push("Orange"); 
// console.log(fruits);

// pop
// let fruits = ["Apple", "Banana","Watermelon","orange"];
// fruits.pop("Orange"); 
// console.log(fruits);

//shift
// let cities = ["Delhi", "Mumbai", "Chennai"];
// cities.shift()
// console.log(cities); 


//unshift
// let cities = ["Delhi", "Mumbai", "Chennai"];
// cities.unshift("kerala")
// console.log(cities); 

// let animals = ["Dog", "Cat", "Elephant"];
// console.log(animals.includes("Cat"));
// console.log(animals.includes("Tiger")); 

// let nums = [10, 20, 30];
// let str=nums.toString();
// console.log(str);
// console.log(nums);
// console.log(typeof(str));

// let letters = ["A", "B", "C", "D","E"];
// letters.reverse();
// console.log(letters); 

// let words = ["Hello", "World"];
// let sentence = words.join(" ");
// console.log(sentence); 

// let stu_boy = ["John", "Paul","Steve"];
// let stu_girl = ["Mary", "Anna","Jas"];
// let students = stu_boy.concat(stu_girl);
// console.log(students);

// let arr = [1, [2, [3, 4]], 5,[6,7]];
// let flatArray = arr.flat(2);
// console.log(arr)
// console.log(flatArray);
// console.log(arr[1][1])

// let colors = ["Red", "Green", "Blue", "Yellow"];
// let result = colors.slice(1, 4);
// console.log(result); // ["Green", "Blue"]

// let num = [1, 4, 5];
// num.splice(1, 0, 2, 3,"four","ten");  // Add 2, 3 at index 1 without removing
// console.log(num); 

// let fruits = ["Banana", "Apple", "Mango"];
// fruits.sort();
// console.log(fruits); 

// let num = [100, 20, 5, 10];
// num.sort((a, b) => a - b); 
// console.log(num); 

// let num = [1, 2, 3, 4, 5];
// num.fill(0);
// console.log(num); 

let arr = [1, 2, 3, 4, 5];
arr.fill(9, 2); 
console.log(arr); 

