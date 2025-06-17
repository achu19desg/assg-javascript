JavaScript
Assignment-2

1.	 What is a variable in JavaScript?

     In JavaScript, a variable is a container for storing data values. It allows you to store, update, and reuse information throughout your code.
     
2.	 What are the variable naming conventions in JavaScript?
      
      let name;
      let _name;
      let $value;
      let age2;

3.	What is the difference between declaration, initialization, and re-assignment?

      Declaration: Creates a variable.
      Initialization: Assigns a value for the first time.
      Re-assignment: Changes the value later.

4.	What are the different types of scope in JavaScript?
     
     Global Scope:Accessible anywhere in the code.
     Local/Function Scope:Accessible only inside the function where it's declared.
     Block Scope:Variables declared with let or const inside {} are limited to that block.
     Lexical Scope:Inner functions have access to variables from their outer functions.

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

     "string","number","boolean","object","undefined","function"

8.	 What is hoisting? Explain with a code e.g.
       
       Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their scope before code execution.  
       
        console.log(x);
        var x = 5;
           Output: undefined

           JavaScript hoists the declaration var x; to the top.
          The assignment x = 5; stays in its original place. So, during execution


9.	 Create a greeting alert. Hint:(use => prompt, variable-message, alert)

       let name = prompt("What is your name?");
       let message = "Hello, " + name + "! Welcome home";
       alert(message);

10.	 Write some code so that the values of the below variables switch around 
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
