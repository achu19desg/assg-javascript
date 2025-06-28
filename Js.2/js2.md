JavaScript
Assignment-2

1.	 What is a variable in JavaScript?

     In JavaScript, a variable is a container for storing data values. It allows you to store, update, and reuse information throughout your code.
     
2.	 What are the variable naming conventions in JavaScript?
      
      Variable names are case-sensitive
      Variable names can be single character, multiple character or alphanumeric. eg: a, abc, abc123
      Camel case is the best naming convention. eg: userName, userLoggedIn -Variable names can't start with numbers and cannot have space in between.
      Variable names cannot be keywords
     
3.	What is the difference between declaration, initialization, and re-assignment?

      Declaration: Creates a variable.
      Initialization: Assigns a value for the first time.
      Re-assignment: Changes the value later.

4.	What are the different types of scope in JavaScript?
     
     Global Scope: Variables or functions declared outside of any function or block reside in the global scope. They are accessible from anywhere in the entire program.
     Function scope: variable declared inside a function.
     Block scope:Variables that are declared inside the { } (curly braces) can only access inside that scope not from the outside of it.

5.	What does scope mean in the context of Javascript variables?
     
     scope refers to the area in the code where a variable is accessible or visible. It can access that variable.

6.	What are let, var, and const? What is the difference between them?
      
      var
     Old way to declare variables.
     Function-scoped.
     Can be re-declared and re-assigned.

      let
     Modern way to declare variables.
     Block-scoped.
     Cannot be re-declared in the same scope, but can be re-assigned.

      const
     Used to declare constant values.
     Block-scoped.
     Cannot be re-declared or re-assigned.

7.	How do you determine the typeof() variable in javascript?

      typeof works for strings, numbers, booleans, objects, etc. Using typeof() to check a variable's type: 
          let x=10;
          console.log(typeof x); //number
     Note: typeof null returns "object"

8.	 What is hoisting? Explain with a code e.g.
       
       Ans: Hoisting in JavaScript means that variable and function declarations are moved to the top of their scope (function or global) before the code runs. This lets you use them earlier in the code, even before they are written.
  eg:
       greet(); 
       function greet()
  	   {
         console.log("Hello ,welcome all!");
        }
    Output: Hello ,welcome all!
  	 
10.	 Create a greeting alert. Hint:(use => prompt, variable-message, alert)

       let name = prompt("What is your name?");
       let message = "Hello, " + name + "! Welcome home";
       alert(message);

11.	 Write some code so that the values of the below variables switch around 
Let a = 5, let b = 8. Switch the value so that a holds the value 8 and the variable b holds the value.
 
  let a = 5;
  let b = 8;
  let temp = a;
  a = b;
  b = temp;
  console.log("a:", a); 
  console.log("b:", b); 
     
     output 
      a=8
      b=5

MCQ

1.	: Variables defined with let cannot be redeclared.
a.	True 
b.	False
    
    ans: true

2.	 Select whether the below JS code is valid or not:
let x = "Hello Peter Doe";
let x = 0;
a.	Valid
b.	Invalid

     ans: invalid

3.	Select whether the below JS code is valid or not:
var x = "John Doe";
var x = 0;
a.	Valid
b.	Invalid
      
      ans: valid
    

4.	Variables defined with const cannot be Reassigned.	
a.	True
b.	False

     ans: true

5.	Variables defined with const can be Redeclared.
a.	True
b.	False

     ans: false

6.	 Select whether the below JS code is valid or not:

const PI = 3.141592653589793;
PI = 3.14;
a.	Valid
b.	Invalid

     ans: invalid

7.	Select whether the below JS code is valid or not:

const PI = 3.141592653589793;
PI = PI + 10;
a.	Valid
b.	Invalid

    ans: invalid

8.	A value must be assigned to a const variable when it is declared
a.	True
b.	False

     ans: true

9.	 Select whether the below JS code is valid or not:

const PI;
PI = 3.14159265359;
a.	Valid
b.	Invaid

    ans: invalid

10.	: Select whether the below JS code is valid or not:

const cars = ["Ford", "Honda", "BMW"];
cars[0] = "Nissan";
a.	Valid
b.	Invalid
     
      ans: valid
        
11.	Select whether the below JS code is valid or not:

const cars = ["Ford", "Honda", "BMW"];
cars = ["Toyota", "Skoda", "Audi"];
a.	Valid
b.	Invalid
       
       ans: invalid

12.	Select whether the below JS code is valid or not:

var x = 2;
var x = 3;
a.	valid
b.	invalid

      ans: valid

13.	Select whether the below JS code is valid or not:

const x = 2;

{
const x = 3;
}

{
const x = 4;
}
a.	Valid
b.	Invalid

    ans: valid

14.	 What will be the console output of the below javascript code?

const a=34;
let b=56;
console.log(a=b);
a.	Uncaught type error: Assignment to constant variable
b.	56	
c.	False
d.	34

    ans: uncaught type error:assignment to constant variable
