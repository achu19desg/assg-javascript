## JavaScript
### Assignment 5
# 1.	Write short notes on string methods with code examples

```
•	toLowerCase()
       Converts all characters in a string to lowercase.
         eg:  let name="JAVASCRIPT"
              console.log(name.toLowerCase()); 

               output : javascript
```
```
•	toUpperCase()
       Converts all characters in a string to uppercase.
        eg: let name="javascript"
            console.log(name.toUpperCase());

            output: JAVASCRIPT
```
```
•	substring()
       Returns part of the string from start to end 
        eg: let str ="I love java";
            let newstr=str.substring(0,6)
            console.log(newstr + "....");

            output: I love ....
```
```
•	replace()
       Replaces the first occurrence of searchValue with newValue.
        eg: let str="I love java";
            let newstr=str.replace("java","javascript");
            console.log(newstr);

            output: I love javascript
```
```
•	trim()
       Removes leading and trailing whitespaces from a string.
        eg: let str="   I love java    ";
            console.log("hello ");
            console.log(str.trim());

            output: hello
                    I love java
``` 
```      
•	split()
       Splits a string into an array based on the given separator.
        eg: let fruits = "apple,banana,orange";
            console.log(fruits.split(","));

            output: [ 'apple', 'banana', 'orange' ]
```
```
•	slice()
       Extracts a section of a string from start to end (end not included). Supports negative indices.
        eg: let str="javascript";
            let newstr=str.slice(0,4)
            console.log(newstr);

            output: java
```   

# 2.	create a simple app that takes the user’s name and greets him/her after capitalizing the first letter of the user’s name and changing the rest of the letters into lowercase (toUpperCase(), toLowerCase(), slice(), length property, string concatenation)

```
ans: 

let name = prompt("Enter a name:");
let len = name.length;
let firstletter = name.slice(0, 1);
let First = firstletter.toUpperCase();
let extraletter = name.slice(1, len);
let Extra = extraletter.toLowerCase();
let fullname = First + Extra;
alert(fullname);

output: Enter a name: hello java
        Hello java
```


# 3.	Write some JavaScript code to create a prompt where the user can enter a long text, such as a paragraph from a blog post, and you will tell them how many characters remain out of either 20 characters. The output you should get should be something like “You have written 12 chars and you have 20 – 8 characters left”

```
ans:

let name = prompt("Enter your name:");
let charcount = name.length;
let remain = 20 - charcount;
alert(`You have enter ${charcount} char, and you have ${remain} char left.`);

output: Enter your name: hello java welcome
        You have enter 19 char, and you have 1 char left

```

# 4.  Create a prompt that takes a comment from the user and, sends an alert after cutting the comment down to only 15 chars

```
ans:

let comment=prompt("Enter a comment:");
alert(comment.slice(0,15));

ouput: Enter a comment: javascript is awesome
       javascript is a

```
