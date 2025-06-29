JavaScript
Assignment 4

1.	Write a chained if / else-if statement to fill in the following conditions

val  < 5  =>  Tiny
val  < 10  =>  Small
val  < 15  =>  Medium
val  < 20  => Large
val  >= 20  => Huge 

ans: 

                    let val = 12; 
                    let size;
                        if (val < 5) 
                        {
                          size = "Tiny";
                        }
                        else if (val < 10)
                        {
                          size = "Small";
                        } 
                        else if (val < 15) 
                        {
                          size = "Medium";
                        } 
                        else if (val < 20) 
                        {
                          size = "Large";
                        } 
                        else 
                        {
                          size = "Huge";
                        }
                    console.log("Size:", size);
                    
      output:
            Size: Medium              


2.	Use the switch case and create an application with the following roles.

admin => gets full access
subAdmin => gets access to create and delete courses
testPrep => gets access to create and delete tests
user => gets access to consume contents

ans:

                let application = ["admin","subAdmin","testPrep","user"]
                let app = "admin"
                
                switch(app)
                {
                    case "admin":
                    console.log("gets full access");
                    break;
                
                    case "subAdmin":
                    console.log("gets access to create and delete courses");
                    break;
                    
                    case "testPrep":
                    console.log("gets access to create and delete tests");
                    break;
                
                    case "user":
                    console.log("gets access to consume contents");
                    break;
                
                    default:
                        console.log("No access");
                }

    output:
         get full access


3.	Check if the person is eligible for voting

ans:
                
                let age=20;
                if(age>=18)
                {
                    console.log("can be voting");
                }
                else
                {
                    console.log("cannot be voting");
                }

        output:
           can be voting


4.	Check if the person has a fever (normal temperature: 98.6F)

ans:

                let temperature=100;
                if(temperature>98.6)
                {
                    console.log("Person have High temperature");
                }
                else
                {
                    console.log("Person have Normal temperature");
                }

        output:
             Person have High temperature

5.	Check if someone has normal temperature: Normal temp= (98 to 98.9)
98.1 => normal
99 => not normal
97.9 => not normal

ans:

                    let temp = 99
                    if(temp >=98 && temp<=98.9)
                    {
                     console.log("Normal");
                    }
                    else if(temp >=99)
                    {
                     console.log("Not Normal");
                    }
                    else
                    {
                     console.log("Not Normal");
                    }

        output:
             Not normal

6.	You need to have 75% attendance to write the exam. Take the total number of classes and the number of attendances from the student and tell him if he can write the exam

ans:

                let Tclass = Number(prompt("Enter total number of classes: "));
                let attend_class = Number(prompt("Enter the number of classes attended: "));
                
                let attendance = (attend_class * 100) / Tclass;
                
                if (attendance > 75)
                {
                    console.log("Eligible to write exam");
                }
                else 
                {
                    console.log("Not eligible to write exam");
                }

        ouput:
         Enter total number of classes: 80
         Enter the number of classes attended: 60 
         Not eligible to write exam

7. If(5>4){
Console.log(“First if”)
}
If(10 >= 6){
Console.log(“Second if”)
}
What will the output of the above code be?

        ans: 
        output: First if
                Second if

8. If(true){
Console.log(“1”)
}
If(false){
Console.log(“2”)
}
If(true){
Console.log(“3”)
   }
What will the output of the above code be?

        ans:
         output: 1
                 3

9.	What will be the output of the code below?

        let a = 50
        let b = 50
        if(a >= 50){
          console.log("a scored half");
          a = a + 1
        }
        if(b >= 50){
          console.log("b scored half");
          b = b + 1
        }
        console.log(a + b);

        ans:
          output: a scored half
                  b scored half
                  102

