/*
//@@ Activating Strict Mode
"use strict";
let hasDriversLicense = false;
const passTest = true;
if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive 😀");

//const interface = "Audio";
//const private = 543;

//@@ Functions
function logger() {
  console.log("My name is Mooping");
}
//* calling/running/invoking function
logger();
logger();
logger();

function fruitProcessor(apple, oranges) {
  console.log(apple, oranges);
  const juice = `Juice with ${apple} apples and ${oranges} oranges`;
  return juice;
}
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

console.log(fruitProcessor(5, 0));

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

const num = Number("23");

//@@Function Declarations vs. Expressions
//* Function Declarations
function calcAge1(birthYeah) {
  return 2021 - birthYeah;
}
const age1 = calcAge1(1988);
console.log(age1);

//* Function Expressions
const calcAge2 = function (birthYeah) {
  return 2021 - birthYeah;
};
const age2 = calcAge2(1988);
console.log(age1, age2);

//@@ Arrow Functions
const calcAge3 = (birthYeah) => 2021 - birthYeah;
const age3 = calcAge3(1988);
console.log(age3);

const yearUntilRetirement = (birthYeah, firstName) => {
  const age = 2021 - birthYeah;
  const retirement = 65 - age;
  //return retirement;
  return`${firstName} retires in ${retirement} years`;
};
console.log(yearUntilRetirement(1988, "Mooping"));
console.log(yearUntilRetirement(1989, "Yuiesung"));

//@@ Functions Calling Other Functions
function cutFruitPieces(Fruit) {
  return Fruit * 4;
}
function fruitProcessor(apple, oranges) {
  const applePieces = cutFruitPieces(apple);
  const orangePieces = cutFruitPieces(oranges);
  const juice = `Juice with ${applePieces} pieces of apples and ${orangePieces} pieces of oranges`;
  return juice;
}
console.log(fruitProcessor(2, 3));

//@@ Reviewing Functions
const calcAge = function (birthYeah) {
  return 2021 - birthYeah;
};
const yearUntilRetirement = function (birthYeah, firstName) {
  const age = calcAge(birthYeah);
  const retirement = 65 - age;
  if (retirement > 0) {
    console.log(`${firstName} retires in ${retirement} years`);
    return retirement;
  } else {
    console.log(`${firstName} has already retires 🎉`);
    return -1;
  }
};
console.log(yearUntilRetirement(1988, "Mooping"));
console.log(yearUntilRetirement(1950, "Yuiesung"));
*/
/**
 * * Coding Challenge #1
 * ? Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new gymnastics discipline, which works differently.
 * ? Each team competes 3 times, and then the average of the 3 scores is calculated (so one average score per team).
 * ? A team only wins if it has at least double the average score of the other team. Otherwise, no team wins!
 * TODO Your tasks:
 * todo 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
 * todo 2. Use the function to calculate the average for both teams
 * todo 3. Create a function 'checkWinner' that takes the average score of each team as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner to the console, together with the victory points, according to the rule above. Example: "Koalas win (30 vs. 13)"
 * todo 4. Use the 'checkWinner' function to determine the winner for both Data 1 and Data 2
 * todo 5. Ignore draws this time
 * ! Test data:
 * ! data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
 * ! data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
 * ! Hints:
 * ! To calculate average of 3 values, add them all together and divide by 3
 * ! To check if number A is at least double number B, check for A >= 2 * B. Apply this to the team's average scores 😉
 */
//todo 1
const calcAverage = (a, b, c) => (a + b + c) / 3;
//console.log(calcAverage(3, 4, 5)); test
//todo 2
let scoreDolphins = calcAverage(44, 22, 71);
let scoreKoalas = calcAverage(65, 54, 49);
console.log(scoreDolphins, scoreKoalas);
//todo 3
const checkWinner = function (avgDolphins, avgKoalas) {
  if (avgDolphins >= 2 * avgKoalas) {
    console.log(`Dolphins win 🏆(${avgDolphins} vs. ${avgKoalas})`);
  } else if (avgKoalas >= 2 * avgDolphins) {
    console.log(`Koalas win 🏆(${avgKoalas} vs. ${avgDolphins})`);
  } else {
    console.log("No team win....");
  }
};
//todo 4
checkWinner(scoreDolphins, scoreKoalas);
//checkWinner(567, 123); test
scoreDolphins = calcAverage(85, 54, 41);
scoreKoalas = calcAverage(23, 34, 27);
console.log(scoreDolphins, scoreKoalas);
checkWinner(scoreDolphins, scoreKoalas);
/*
//@@ Introduction to Arrays
const friend1 = "Michael";
const friend2 = "Steven";
const friend3 = "Peter";

const friends = ["Michael", "Steven", "Peter"];
console.log(friends); //(3) ["Michael", "Steven", "Peter"]

const year = new Array(1991, 1984, 2008, 2020);

console.log(friends); //(3) ["Michael", "Steven", "Peter"]
console.log(friends[0]); //Michael
console.log(friends[2]); //Peter
console.log(friends.length); //3
console.log(friends[friends.length - 1]); //Peter คือเริ่มจาก [0]

friends[2] = "Jay";
console.log(friends); //(3) ["Michael", "Steven", "Jay"]
//friends = ["Bob", "Alice"]; ไม่ครบ
const firstName = "Mooping";
const mooping = [firstName, "Pinthong", 2021 - 1988, "Student", friends];
console.log(mooping); //(5) ["Mooping", "Pinthong", 33, "Student", Array(3)]
console.log(mooping.length); //5

//! example
const calcAge = function (birthYeah) {
  return 2021 - birthYeah;
};
const years = [1990, 1967, 2002, 2010, 2018];
console.log(calcAge(years)); //NaN พิมพ์เอา years

const age1 = calcAge(years[0]);
const age2 = calcAge(years[1]);
const age3 = calcAge(years[years.length - 1]);
console.log(age1, age2, age3); //31 54 3
const ages = [calcAge(year[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
console.log(ages); //(3) [30, 54, 3]

//@@ Basic Array Operations (Methods)
const friends = ["Michael", "Steven", "Peter"];
const newLength = friends.push("Jay");
console.log(friends); //(4) ["Michael", "Steven", "Peter", "Jay"]
console.log(newLength); //4

friends.unshift("John");
console.log(friends); //(5) ["John", "Michael", "Steven", "Peter", "Jay"]
//* Remove element
//* last
friends.pop();
console.log(friends); //(4) ["John", "Michael", "Steven", "Peter"]

const popped = friends.pop();
console.log(popped); //Peter
//* First
friends.shift();
console.log(friends); //(3) [Michael", "Steven"]

console.log(friends.indexOf("Steven")); //1
console.log(friends.indexOf("Bob")); //-1

friends.push(23);
console.log(friends.includes("Steven")); //true
console.log(friends.includes("Bob")); //false
console.log(friends.includes("23")); //false
console.log(friends.includes(23)); //true because Number
if (friends.includes("Steven")) {
  console.log("You have a friend called Steven"); //You have a friend called Steven
}
*/
/**
 * * Coding Challenge #2
 * ? Steven is still building his tip calculator, using the same rules as before: Tip 15% of the bill if the bill value is between 50
 * ? and 300, and if the value is different, the tip is 20%.
 * TODO Your tasks:
 * todo 1. Write a function 'calcTip' that takes any bill value as an input and returns the corresponding tip, calculated based on the rules above (you can check out the code from first tip calculator challenge if you need to). Use the function type you like the most. Test the function using a bill value of 100
 * todo 2. And now let's use arrays! So create an array 'bills' containing the test data below
 * todo 3. Create an array 'tips' containing the tip value for each bill, calculated from the function you created before
 * todo 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
 * ! Test data:
 * ! 125, 555 and 44
 * ! Hint:
 * ! Remember that an array needs a value in each position, and that value can actually be the returned value of a function!
 * ! So you can just call a function as array values (so don't store the tip values in separate variables first, but right in the new array)
 **/
//todo 1
const calcTip = function (bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
};
//const calcTip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//todo 2
const bills = [125, 555, 44];
//const tip1 = calcTip(bills[0]);
//const tip2 = calcTip(bills[1]);
//const tip3 = calcTip(bills[2]);
//console.log(tip1, tip2, tip3); //18.75 111 8.8
//todo 3
const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
console.log(bills, tips); //(3) [125, 555, 44] (3) [18.75, 111, 8.8]
//todo 4
const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
console.log(bills, tips, totals); //(3) [125, 555, 44] (3) [18.75, 111, 8.8] (3) [143.75, 666, 52.8]
/*
//@@ Introduction to Objects
const moopingArray = ["Mooping", "Pinthong", 2021 - 1988, "Student", ["Michael", "Peter", "Steven"]];
const mooping = {
  firstName: "Mooping",
  lastName: "Pinthong",
  age: 2021 - 1988,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
};
console.log(mooping); //{firstName: "Mooping", LastName: "Pinthong", age: 33, job: "Student", friends: (3) ["Michael", "Peter", "Steven"]}
//@@ Dot vs. Bracket Notation
console.log(mooping.lastName); //Pinthong
console.log(mooping["lastName"]); //Pinthong

const nameKey = "Name"; // use same last word (name is same)
console.log(mooping[`first` + nameKey]); //Mooping
console.log(mooping[`last` + nameKey]); //Pinthong

const interestedIn = prompt("What do you want to about Mooping? Choose between firstname, lastname, age, job and friends");
//console.log(mooping[interestedIn]); //say job = student

if (mooping[interestedIn]) {
  console.log(mooping[interestedIn]);
} else {
  console.log("Wrong request! Choose between firstname, lastname, age, job and friends again");
}
mooping.location = "Thailand";
mooping["twitter"] = "@yuiesung66";
console.log(mooping); //firstName: "Mooping", lastName: "Pinthong", age: 33, job: "Student", friends: (3) ["Michael", "Peter", "Steven"], location: "Thailand", twitter: "@yuiesung66"]}

//! example : "Mooping has 3 friends, and her best friends is called Michel"
console.log(`${mooping.firstName} has ${mooping.friends.length} friends, and her best friends is called ${mooping.friends[0]}`);

//@@ Object Methods
const mooping = {
  firstName: "Mooping",
  lastName: "Pinthong",
  birthYeah: 1988,
  job: "Student",
  friends: ["Michael", "Peter", "Steven"],
  hasDriversLicense: true,

  //calcAge: function (birthYeah) {
  //return 2021 - birthYeah;
  //},

  //calcAge: function () {
  //console.log(this); //{firstName: "Mooping", lastName: "Pinthong", birthYeah: 1988, job: "Student", friends: (3) ["Michael", "Peter", "Steven"], hasDriverslicense: true}
  //return 2021 - this.birthYeah;
  //},

  calcAge: function () {
    this.age = 2021 - this.birthYeah;
    return this.age;
  },

  getSummary: function () {
    return `${this.firstName} is a ${this.calcAge()}-year old ${mooping.job}, and her has ${this.hasDriversLicense ? "a" : "no"} driver's license`;
  },
};
//console.log(mooping.calcAge(1988)); //33
//console.log(mooping["calcAge"](1988)); //33

console.log(mooping.calcAge()); //33
console.log(mooping.age); //33 open both

//! example : "mooping is a 18-year old student, and her have a driver's license"
console.log(mooping.getSummary()); //Mooping is a 33-year old Student, and her has a driver's license
*/
/**
 * * Coding Challenge #3
 * ? Let's go back to Mark and John comparing their BMIs! This time, let's use objects to implement the calculations!
 * ? Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)
 * TODO Your tasks:
 * todo 1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
 * todo 2. Create a 'calcBMI' method on each object to calculate the BMI (the same method on both objects). Store the BMI value to a property, and also return it from the method
 * todo 3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John Smith's BMI (28.3) is higher than Mark Miller's (23.9)!"
 * ! Test data:
 * ! Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 **/
//todo 1
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  //todo 2
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};
mark.calcBMI();
john.calcBMI();
//console.log(mark.bmi); //27.309968138370508
//console.log(john.bmi); //24.194608809993426
//console.log(mark.bmi, john.bmi); //27.309968138370508 24.194608809993426
//todo 3
if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else if (john.bmi > mark.bmi) {
  console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
/*
//@@ Iteration: The for Loop
//console.log("Lifting weights repetition 1 🏋️‍♂️");
//console.log("Lifting weights repetition 2 🏋️‍♂️");
//console.log("Lifting weights repetition 3 🏋️‍♂️");
//console.log("Lifting weights repetition 4 🏋️‍♂️");
//console.log("Lifting weights repetition 5 🏋️‍♂️");
//console.log("Lifting weights repetition 6 🏋️‍♂️");
//console.log("Lifting weights repetition 7 🏋️‍♂️");
//console.log("Lifting weights repetition 8 🏋️‍♂️");
//console.log("Lifting weights repetition 9 🏋️‍♂️");
//console.log("Lifting weights repetition 10 🏋️‍♂️");
//* for loop keep running while condition is TRUE
//rep = rep + 1 = rep++
for (let rep = 1; rep <= 10; rep++) {
  console.log(`Lifting weights repetition ${rep} 🏋️‍♂️`);
}

//@@ Looping Arrays, Breaking and Continuing
const mooping = ["Mooping", "Pinthong", 2021 - 1988, "Student", ["Michael", "Peter", "Steven"], true];
const type = [];
//console.log(mooping[0], typeof mooping[0]); //Mooping string
//console.log(mooping[1], typeof mooping[1]); //Pinthong string
//... //33 "number"...Student string
//console.log(mooping[4], typeof mooping[4]); //(3) ["Michael", "Peter", "Steven"] "object"
//console.log(mooping[5], typeof mooping[5]); dose NOT exit //true "boolean"
//* 0, 1, ..., 4
for (let i = 0; i < mooping.length; i++) {
  //* Reading from mooping array
  console.log(mooping[i], typeof mooping[i]);
  //* Filling types array
  //type[i] = typeof mooping[i];
  type.push(typeof mooping[i]);
}
console.log(type); //(6) ["string", "string", "number", "string", "object", "boolean"]

const years = [1991, 2007, 1969, 2020];
const ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2021 - years[i]);
}
console.log(ages); //(4) [30, 14, 52, 1]
//* Continue and break
console.log("---ONLY STRINGS (!==)---");
for (let i = 0; i < mooping.length; i++) {
  if (typeof mooping[i] !== "string") continue;
  console.log(mooping[i], typeof mooping[i]);
  //---ONLY STRINGS (!==)---
  //Mooping string
  //Pinthong string
  //Student string
}
console.log("---BREAK WITH NUMBER (===)---");
for (let i = 0; i < mooping.length; i++) {
  if (typeof mooping[i] === "number") continue;
  console.log(mooping[i], typeof mooping[i]);
  //---BREAK WITH NUMBER (===)---
  //Mooping string
  //Pinthong string
  //Student string
  //(3) ["Michael", "Peter", "Steven"] "object"
  //true "boolean"
}
//@@Looping Backwards and Loops in Loops
//* Looping Backwards
const mooping = ["Mooping", "Pinthong", 2021 - 1988, "Student", ["Michael", "Peter", "Steven"], true];
//* 4, 3, ..., 0
for (let i = mooping.length - 1; i >= 0; i--) {
  console.log(i, mooping[i]);
  //5 true
  //4 (3) ["Michael", "Peter", "Steven"]
  //3 Student
  //2 33
  //1 Pinthong
  //0 Mooping
}
//* Loops in Loops
for (let exercise = 1; exercise < 4; exercise++) {
  console.log(`---Starting exercise ${exercise}`);
  //---Starting exercise 1
  //---Starting exercise 2
  //---Starting exercise 3
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise} Lifting weight repetition ${rep} 🏋️‍♂️`);
    //---Starting exercise 1
    //Exercise 1 Lifting weight repetition 1 🏋️‍♂️
    //Exercise 1 Lifting weight repetition 2 🏋️‍♂️
    //Exercise 1 Lifting weight repetition 3 🏋️‍♂️
    //Exercise 1 Lifting weight repetition 4 🏋️‍♂️
    //Exercise 1 Lifting weight repetition 5 🏋️‍♂️
    //---Starting exercise 2
    //Exercise 2 Lifting weight repetition 1 🏋️‍♂️
    //Exercise 2 Lifting weight repetition 2 🏋️‍♂️
    //Exercise 2 Lifting weight repetition 3 🏋️‍♂️
    //Exercise 2 Lifting weight repetition 4 🏋️‍♂️
    //Exercise 2 Lifting weight repetition 5 🏋️‍♂️
    //---Starting exercise 3
    //Exercise 3 Lifting weight repetition 1 🏋️‍♂️
    //Exercise 3 Lifting weight repetition 2 🏋️‍♂️
    //Exercise 3 Lifting weight repetition 3 🏋️‍♂️
    //Exercise 3 Lifting weight repetition 4 🏋️‍♂️
    //Exercise 3 Lifting weight repetition 5 🏋️‍♂️
  }
}

//@@ The while Loop
for (let rep = 1; rep <= 5; rep++) {
  console.log(`FOR: Lifting weights repetition ${rep} 🏋️‍♂️`);
  //FOR: Lifting weights repetition 1 🏋️‍♂️
  //...
  //FOR: Lifting weights repetition 5🏋️‍♂️
}

let rep = 1;
while (rep <= 5) {
  console.log(`WHILE: Lifting weights repetition ${rep} 🏋️‍♂️`);
  rep++;
  //WHILE: Lifting weights repetition 1 🏋️‍♂️
  //...
  //WHILE: Lifting weights repetition 5 🏋️‍♂️
}
//* Random Number
let dice = Math.trunc(Math.random() * 6) + 1; //+1 = หลักหน่วย
//console.log(dice);
while (dice !== 6) {
  console.log(`You rolled a ${dice}`);
  dice = Math.trunc(Math.random() * 6) + 1;
  if (dice === 6) console.log("Loop is about end...");
  //You rolled a 3
  //You rolled a 2
  //You rolled a 4
  //Loop is about end...
}
*/
/**
 * * Coding Challenge #4
 * ? Let's improve Steven's tip calculator even more, this time using loops!
 * TODO Your tasks:
 * todo 1. Create an array 'bills' containing all 10 test bill values
 * todo 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
 * todo 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate tips and total values (bill + tip) for every bill value in the bills array. Use a for loop to perform the 10 calculations!
 * todo 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as an argument. This function calculates the average of all numbers in the given array. This is a difficult challenge (we haven't done this before)! Here is how to solve it:
 * todo 4.1 First, you will need to add up all values in the array. To do the addition, start by creating a variable 'sum' that starts at 0. Then loop over the array using a for loop. In each iteration, add the current value to the 'sum' variable. This way, by the end of the loop, you have all values added together
 * todo 4.2 To calculate the average, divide the sum you calculated before by the length of the array (because that's the number of elements)
 * todo 4.3 Call the function with the 'totals' array
 * ! Test data:
 * ! 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
 * ! Hints:
 * ! Call ‘calcTip ‘in the loop and use the push method to add values to the tips and totals arrays 😉
 * ! Bonus:
 **/
//todo 1
const calcTips1 = function (bill1) {
  return bill1 >= 50 && bill1 <= 300 ? bill1 * 0.15 : bill1 * 0.2;
};
const bills1 = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
//todo 2
const tips1 = [];
const totals1 = [];
//todo 3
for (let i = 0; i < bills1.length; i++) {
  const tip = calcTips1(bills1[i]);
  tips1.push(tip);
  totals1.push(tip + bills1[i]);
}
console.log(bills1, tips1, totals1);
//(10) [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
//(10) [4.4, 44.25, 26.4, 88, 7.4, 15.75, 2, 220, 12.9, 7.8]
//(10) [26.4, 339.25, 202.4, 528, 44.4, 120.75, 12, 1320, 98.9, 59.8]
//todo 4
const calcAverage1 = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    //sum = sum + arr[i];
    sum += arr[i];
  }
  //console.log(sum); //11 test
  return sum / arr.length;
};
//todo 4.1
console.log(calcAverage1([2, 3, 6]));
//todo 4.2
console.log(calcAverage1(totals1)); //275.19
console.log(calcAverage1(tips1)); //42.89
