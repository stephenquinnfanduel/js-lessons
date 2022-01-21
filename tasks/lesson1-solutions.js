/*
## Tasks

### Task 1 - Variables
**Part 1**: We want to store some data about a person. Use a real or fictional example to create variables called `firstName`, `secondName`, `age`, and `job`. 

**Part 2**: A year's passed since you first wrote that code. Time flies haha! [note to self - don't add back jokes]! Make your person a year older.

### Task 2: Types
**Part 1**: Below is a list of containing 6 values. Write down their types next to them.

```JS
"This is alright."

42

true

undefined

null

{}
```

### Task 3: Functions
**Part 1**: Write a greet function which says "Good morning!". You can call the function anything but try to give it a useful name.

**Part 2**: Copy the function from Part 1 and change it to greet someone by name. We should be able to use any name with it. I.e. use it to say "Good morning Alastair!" or "Good morning Crawford!"

**Part 3**: Write a function to add two numbers. Just as how we could use any name for the function in Part 2, we should be able to use any numbers we want for this part. */

// Task 1: Part 1
//let firstName = "John";
//let secondName = "Doe";
//let age = 25;
let job = "Tester";

const person = {
    firstName:"John", 
    secondName:"Doe",
    age:25,
    job:"Tester"
};

// Task 1: Part 2
//age = 26;
person.age = 26
console.log("The age is " + person.age)

//Task 2: Part 1
/* 
"This is alright."  - String

42                  - Number

true                - Boolean

undefined           - undefined

null                - Null

{}                  - Object
*/

// Task 3: Part 1
function greeting(){
    return "Good Morning!"
}
console.log(greeting())

// Task 3: Part 2
function greetingWithName(name){
    //This allows use to add a variable into the string without splitting up the string
    return `Good Afternoon ${name}!`
    //return "Good Afternoon " + name + "!"
}
console.log(greetingWithName(person.firstName))
// console.log(greeting2())

//These methods allow us to log variables
console.log("job", person.job)
console.log({job})
console.log({person})


// Task 3: Part 3
function addTwoNumbers(n1, n2){
    return n1 + n2
}
console.log("The answer is: " + calculator(4, 5))