// Assignmnts loops

// Assignment 1. Creating a lesson plan(using for loop)

// Objective: create a list of lesson objects in typescript  with alternating statuses to indicate whether
// each lesson is running this year.
//  steps to follow:
// 1. creat a blank array: start by setting up an empty array named myWork that will hold objects.
// 2. Use a loop to create lessons: Write a for loop that runs from 1 to 10. in each iteration:
// : Create an object representing a lesson.
// : Each lesson should have a name property,which is a string like "lesson 1","Lesson 2".
// : Each lesson should also have a status property ,which alternates between true and false.This means"lesson 1"
//  will have status true,"lesson 2" will have status false,and so on.
// 3. Add the lesson to the array: push each lesson object into the mywork array.
// 4.print the result: finally,log the mywork array to console to see the list of lessons.
// Hints:
// : Use a ternary operator to set the status property based on whether the lesson number is odd or even
// : The modulo operator % can help determine if a number is even or odd.

// blank array
let myWork: object[] = []; // blank array
// using for loop runs from 1 to 10
for (let i = 1; i <= 10; i++) {
  // create object represent lesson
  let lesson = {
    name: `Lesson ${i}`,
    status: i % 2 == 0 ? false : true,
  };
  myWork.push(lesson);
}
console.log("\n\t*****Creating lesson plan******\n");
console.log(myWork); // console to view the list

// Assignment 2 : Guessing Game (using while loop)

// objective: Create a simple number guessing game where the user tries to guess a randomly generated number
// between 1 and a specified maximum value using a predefined set of guesses.
// steps to follow:
// 1. Set a maximum value: Creata variable to store the maximum value for the number guessing game.
// 2. Generate a random number : Use Math.random () and Math.floor() to generate a random number between 1
//  and the maximum value.log this value to the console for development purposes.
// 3.Track the guess status: Create a variable to track whether the user's guess is correct.
// Set it to falses initially.
// 4. Simulate user guesses: Use an array to store a series of predefined guesses.
// 5.Iterate over guesses: Use a while loop to iterate over the predefined guesses until the
// correct guess is made.
// 6. Check the uses's guess: Inside the loop,check if the current guess matches the random number.provides
// feedback if the guess is too high or too low.

// create a simple number guessing game
let maximumValue: number = 10;
let randomNumber: number = Math.floor(Math.random() * maximumValue) + 1;
console.log("Generate a Random Number", randomNumber); // console for development purposes.
// Track the guess status
let guessNumberStatus: boolean = false;
let userGuess: number[] = [4, 3, 5, 7, 9, 8, 2, 1, 6, 10]; // an array to store a series of predefined guesses
let i = 0;
// use loop
while (i < userGuess.length) {
  let Currentguess = userGuess[i];
  if (Currentguess === randomNumber) {
    guessNumberStatus = true;
    console.log("Congratulation! You guess correct");
  } else if (Currentguess < randomNumber) {
    console.log("your Guess is too low.");
  } else {
    console.log("your Guess is to high");
  }
  i++;
}

// Assignment 3. Counter Increment(Using do while loop)
// Objective: Creat a program that increments a counter by a specified step value using a do while loop
// and prints the counter value to the console until it reaches or exceeds 100.

// steps to follow
// 1. set the starting counter to the 0: creat a variable counter and initialize it to 0.
// 2. creat a variable,step,to increase your counter by : Define a variable step to hold the value by which the
//  counter will be increment
// 3.Add a do...while loop :In the loop,print the counter to the console and increment it by the
//  step amount each iteration.
// 4. Continue to loop until the counter is equal to or more then 100 :  the loop should run as long as
//  the counter is less than 100 .

// create a variable called counter
let counter: number = 0;
let step = 15;
// using do while loop
do {
  console.log(counter);
  counter += step;
  // counter less then 100
} while (counter < 100);

// Assignment 4. Exploring object with for... in loop
// objective : practice working with objects in Typescript and iterating over their properties using
//  a for...in loop
// Instructions:
// 1: Create a simple object wih three items :
// : define an object called myObject with three properties item1,item2, and item3, each with
//    corresponding string value.
// 2. Use for...in loop to get properties' names and values from the object:
// : Iterayte through the properties of myObject using a for... in loop.
// : Inside the loop, print each property's name and its corresponding value to the console.

// simple object wih three items
let myObject = {
  item1: "Civic",
  item2: "Honda",
  item3: "Sports Car",
};
console.log("\t\n******Exploring Object*****\n");
for (let items in myObject) {
  console.log(`${items}:${myObject[items]}`);
}

// Assignment 5: Exploring Arrays with loops(using loop)
// objective : Practice working with arrays in Typescript and using for loops and for....of loops
// to iterate through array elements.
// instructions:
// 1. Creat an empty array :
// : Define an empty array called myArray.
// 2: Run a loop 10 times, adding a new incrementing value to the array:
//  : Use a for loop to iterate 10 times .
// : in each iteration,add a new incrementing value(starting from 1) to the myArray,
// 3: Log the array into the console:
// : After populating the array ,log the newArray into the console.
// 4:Use the for loop to iterate through the array:
// : Use a for loop to iterate through the array elements.
// : Adjust the number of iterations based on the numbers of values in the array.
// : Output each array element along with its index into the console.
// :: Use the for...of loop to output the value into the console from the array:
// :Use a for ...of loop to iterate through the array elements.
// : Output each array element directly into the console.

// empty array
let myArray: number[] = [];
console.log("\n****** Exploring Arrays with loops******");
// using for loops
for (let i = 1; i <= 10; i++) {
  myArray.push(i);
}
console.log("myArray", myArray);
// for loop
for (let i = 0; i < myArray.length; i++) {
  console.log(`indexNo ${i}:  element ${myArray[i]}`);
}
// for of loop use to output the value into console
for (let value of myArray) {
  console.log("element:", value);
}
