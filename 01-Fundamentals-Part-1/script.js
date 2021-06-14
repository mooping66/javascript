/*
//@@ Linking a JavaScript File
let js = "amazing";
if (js === "amazing") alert("JavaScrip is FUN!");
//40 + 8 + 23 - 10;
console.log(40 + 8 + 23 - 10);
console.log("mooping");
console.log(23);

//@@ Values and Variables
let firstName = "Yuiesung";
console.log(firstName);
console.log(firstName);
console.log(firstName);

//* Variable name  convention
let first = "moo";
let firstNamePerson;
let first_name_person;

let mooping_yuiesung = "MY";
let $function = 27;

let person = "mooping";
let PI = 3.1415;

let myFirstJob = "Programmer";
let myCurrentJob = "Student";
let job1 = "programmer";
let job2 = "student";

console.log(myFirstJob);

//@@ Data type
true;
console.log(true);

console.log(typeof 23);
console.log(typeof "mooping");
console.log(typeof true);

let javascriptIsFun = true;
console.log(javascriptIsFun);
console.log(typeof javascriptIsFun);
javascriptIsFun = "YES!";
console.log(typeof javascriptIsFun);

let year;
console.log(year);
console.log(typeof year);
year = 2001;
console.log(typeof year);

console.log(typeof null);

//@@ Use let, count and var
let age = 30;
console.log(age);
age = 31;
console.log(age);

const birthYear = 1990;
//birthYear=1988 ค่าจะไม่ไปทับของเดิม
//const job; ไม่มีค่ากำหนด
console.log(birthYear);

var job = "Programmer";
console.log(job);
job = "student";
console.log(job);

lastName = "Pinthong";
console.log(lastName);

//@@ Basic operators
//* Math operators
const ageMooping = 2021 - 1988;
const ageYuiesung = 2021 - 1990;
console.log(ageMooping, ageYuiesung);

const now = 2021;
const ageMooPing = now - 1988;
const ageYuieSung = now - 1990;
console.log(ageMooPing, ageYuieSung);

console.log(ageMooPing * 2, ageMooping / 2, 2 ** 3);
//* 2**3 mean 2 to the power of 3 = 2*2*2

const firstName = "Mooping";
const lastName = "Pinthong";
console.log(firstName + lastName);
console.log(firstName + " " + lastName);

//* Assignment operators
let x = 10 + 5; //15
x += 10; //x = x+10 = 15+10 = 25
x *= 4; //x = x*4 = 25*4 = 100
x++; //x = x+1 = 100+1 = 101
x--; //x = x-1 = 101-1 = 100
x--; //x = x-1 = 100-1 = 99
console.log(x + typeof x);

//* Comparison operators
console.log(ageMooping > ageYuiesung); //>, <, >=, <==
console.log(ageYuiesung >= 32);
console.log(ageYuiesung >= 31);

const isFullAge = ageYuiesung >= 32;
console.log(isFullAge);
console.log(now - 1988 > now - 1990);

//@@ Operator Precedence
const now = 2021;
const ageMooPing = now - 1988;
const ageYuieSung = now - 1990;
console.log(now - 1988 > now - 1990);

console.log(25 - 10 - 5); //left to right

let x, y;
x = y = 25 - 10 - 5; // right to left
console.log(x, y);

const averageAge = (ageMooPing + ageYuieSung) / 2;
console.log(ageMooPing, ageYuieSung, averageAge);
*/
/**
 * * Coding Challenge #1
 * ? Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula:
 * ? BMI = mass / height ** 2 = mass / (height * height)
 * ? (mass in kg and height in meter).
 * TODO Your tasks:
 * todo 1. Store Mark's and John's mass and height in variables
 * todo 2. Calculate both their BMIs using the formula (you can even implement both versions)
 * todo 3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.
 * ! Test data:
 * ! data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
 * ! data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
 **/
//todo 1
/* 
const massMark = 78;
const heightMark = 1.69;
const massJohn = 92;
const heightJohn = 1.95;
*/
const massMark = 95;
const heightMark = 1.88;
const massJohn = 85;
const heightJohn = 1.76;
//todo 2
const BMIMask = massMark / heightMark ** 2;
const BMIJohn = massMark / (heightJohn * heightJohn);
console.log(BMIMask, BMIJohn);
//todo 3
const markHigherBMI = BMIMask > BMIJohn;
console.log(markHigherBMI);

console.log("BMI Mark is " + BMIMask + " BMI John is " + BMIJohn, markHigherBMI);
/*
//@@ String and Template Literals
const firstName = "Mooping";
const job = "Student";
const birthYear = 1988;
const year = 2021;
const mooping = "I'm " + firstName + ", a " + (year - birthYear) + " years old, job is a " + job + "!";
console.log(mooping);

const moopingNew = `I'm ${firstName}, a ${year-birthYear} years old, job is a ${job}!`;
console.log(moopingNew);

console.log("Just a regular string...");
console.log("String with \n multiple \n lines");
console.log("Stringmultiplelines");

//@@ Taking Decisions: if / else Statements
const age = 15;
const isOlsEnough = age >= 18;
if (isOlsEnough) {
  console.log("Yuiesung can start driving license 🚗");
} else {
  const yearsLeft = 18 - age;
  console.log(`Yuiesung is too young, Wait another ${yearsLeft} years 😀`);
}

const birthYear = 1988;
let century;
if (birthYear <= 2021) {
  century = 20;
} else {
  century = 21;
}
console.log(century);
*/
/**
 * * Coding Challenge #2
 * ? Use the BMI example from Challenge #1, and the code you already wrote, and improve it.
 * TODO Your tasks:
 * todo 1. Print a nice output to the console, saying who has the higher BMI. The message is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
 * todo 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"
 * ! Hint:
 * ! Use an if/else statement
 **/
//todo 1
//นำค่าจาก Challenge #1
//const massMark = 95;
//const heightMark = 1.88;
//const massJohn = 85;
//const heightJohn = 1.76;
//const BMIMask = massMark / heightMark ** 2;
//const BMIJohn = massMark / (heightJohn * heightJohn);
//const markHigherBMI = BMIMask > BMIJohn;
if (BMIMask > BMIJohn) {
  console.log("Mark's BMI is higher than John's!");
} else {
  console.log(`John's BMI is higher than Mark`);
}
//todo 2
if (BMIMask > BMIJohn) {
  console.log(`Mark's BMI (${BMIMask}) is higher than John's (${BMIJohn})!`);
} else {
  console.log(`Mark's BMI (${BMIJohn}) is higher than John's (${BMIMask})!`);
}
/*
//@@ Type Conversion
const inputYear = "2021";
console.log(Number(inputYear), inputYear); //2021 "2021"
console.log(inputYear + 18); //202118
console.log(Number(inputYear) + 18); //2039

console.log(Number("mooping")); //NaN
console.log(typeof NaN); //number

console.log(String(23), 23);

//* Type coercion
console.log("I an " + 23 + " years old");
console.log("I an " + "23" + " years old");
console.log("I an " + String(23) + " years old");
console.log("23" - "10" - 3); //10
console.log("23" + "10" + 3); //23103
console.log("23" * "2"); // 46
console.log("23" / "2"); //11.5
console.log("23" > "18"); //true

let n = "1" + 1; //11
n = n - 1; //n = 11-1
console.log(n); //10

console.log(2 + 3 + 4 + "5"); //9+"5"  =95
console.log("10" - "4" - "3" - 2 + "5"); // "3"-2+"5" = 1+"5" = 15

//@@ Truthy and Falsy Values
//* 5 false value:0, "", undefined, null, NaN
console.log(Boolean(0)); //false
console.log(Boolean(undefined)); //false
console.log(Boolean("mooping")); //true
console.log(Boolean("")); //false
console.log(Boolean({})); //true

const money = 100;
if (money) {
  console.log("Don't spend it all ;");
} else {
  console.log("You should get a job!");
}

let height = 0;
if (height) {
  console.log("YAY! Height is defined");
} else {
  console.log("Height is UNDEFINED");
}

//@@ Equality Operators: == vs. ===
const age = 18;
if (age === 18) console.log("You just became an adult 😀(strict)");
if (age == 18) console.log("You just became an adult 😀(loose)");

18 === 18; //true
18 === 19; //false
"18" === 18; //false "18" = String
"18" == 18; //true "18" = Number

const age1 = "18";
if (age1 === 18) console.log("You just became an adult 😀(strict)");
if (age1 == 18) console.log("You just became an adult 😀(loose)");

const favorite = Number(prompt("What's your favorite number?"));
console.log(favorite);
console.log(typeof favorite);
if (favorite === 23) {
  console.log("Cool! 23 is an amazing number");
} else if (favorite === 7) {
  console.log("7 is also a cool number");
} else if (favorite === 9) {
  console.log("7 is also a cool number");
} else {
  console.log("Number is not 23 or 7 or 9");
}
if (favorite !== 23) {
  console.log("Why not 23?");
}

//@@ Boolean Logic and Logical Operators
const hasDriversLicense = true; //A
const hasGoodVision = true; //B
console.log(hasDriversLicense && hasGoodVision); //A and B
console.log(hasDriversLicense || hasGoodVision); //A or B
console.log(!hasDriversLicense); //notA
if (hasDriversLicense && hasGoodVision) {
  console.log("Mooping is able to drive!");
} else {
  console.log("Someone else should drive..");
}

const isTired = true; //C
console.log(hasDriversLicense && hasGoodVision && isTired);
console.log(hasDriversLicense || hasGoodVision || isTired);
if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Mooping is able to drive!");
} else {
  console.log("Someone else should drive..");
}
*/
/**
 * * Coding Challenge #3
 * ? There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!
 * TODO Your tasks:
 * todo 1. Calculate the average score for each team, using the test data below
 * todo 2. Compare the team's average scores to determine the winner of the competition, and print it to the console. Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)
 * todo 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. Hint: Use a logical operator to test for minimum score, as well as multiple else-if blocks 😉
 * todo 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points. Otherwise, no team wins the trophy
 * ! Test data:
 * ! data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
 * ! Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
 * ! Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
 **/
//todo 1
//const scoreDolphins = (96 + 108 + 89) / 3;
//const scoreKoalas = (88 + 91 + 110) / 3;

//const scoreDolphins = (97 + 112 + 101) / 3;
//const scoreKoalas = (109 + 95 + 123) / 3;

const scoreDolphins = (97 + 112 + 101) / 3;
const scoreKoalas = (109 + 95 + 106) / 3;
console.log(scoreDolphins, scoreKoalas);
//todo 2
if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas) {
  console.log("Koalas win the trophy 🏆");
} else if (scoreDolphins === scoreKoalas) {
  console.log("Both win the trophy!");
}
//todo 3
if (scoreDolphins > scoreKoalas && scoreDolphins >= 100) {
  console.log("Dolphins win the trophy 🏆");
} else if (scoreDolphins < scoreKoalas && scoreKoalas >= 100) {
  console.log("Koalas win the trophy 🏆");
}
//todo 4
else if (scoreDolphins === scoreKoalas && scoreDolphins >= 100 && scoreKoalas >= 100) {
  console.log("Both win the trophy!");
} else {
  console.log("No one wins the trophy 😭");
}
/*
//@@ The switch Statement
const day = "monday";
switch (day) {
  case "monday": //day=== "monday"
    console.log("Plan course structure");
    console.log("Go to coding meetup");
    break;
  case "tuesday":
    console.log("Prepare theory videos");
    break;
  case "wednesday":
  case "thursday":
    console.log("Write code example");
    break;
  case "friday":
    console.log("Record videos");
    break;
  case "saturday":
  case "sunday":
    console.log("Enjoy the weekend 😁");
    break;
  default:
    console.log("Not a valid day!");
}

if ((day === "monday")) {
  console.log("Plan course structure");
  console.log("Go to coding meetup");
} else if (day === "tuesday") {
  console.log("Prepare theory videos");
} else if (day === "wednesday" || day === "thursday") {
  console.log("Write code example");
} else if (day === "friday") {
  console.log("Record videos");
} else if (day === "saturday" || day === "sunday") {
  console.log("Enjoy the weekend 😁");
} else {
  console.log("Not a valid day!");
}

//@@ Statements and Expressions
3 + 4;
1991;
true && false && !false;
if (23 > 10) {
  const str = "23 is bigger";
}
const me = "mooping;";
console.log(`i'm ${2037 - 1991} year ols ${me}`);

//@@ The Conditional (Ternary) Operator
const age = 15;
age >= 18 ? console.log("I like to drink wine 🍷") : console.log("I like to drink milk 🥛");

const drink = age >= 18 ? `wine 🍷` : `milk 🥛`;
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = `wine 🍷`;
} else {
  drink2 = `milk 🥛`;
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? `wine 🍷` : `milk 🥛`}`);
*/
/**
 * * Coding Challenge #4
 * ? Steven wants to build a very simple tip calculator for whenever he goes eating in a restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and 300. If the value is different, the tip is 20%.
 * TODO Your tasks:
 * todo 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for this. It's not allowed to use an if/else statement 😅 (If it's easier for you, you can start with an if/else statement, and then try to convert it to a ternary operator!)
 * todo 2. Print a string to the console containing the bill value, the tip, and the final value (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value 316.25”
 * ! Test data:
 * ! data 1: Test for bill values 275, 40 and 430
 * ! Hints:
 * ! To calculate 20% of a value, simply multiply it by 20/100 = 0.2
 * ! Value X is between 50 and 300, if it's >= 50 && <= 300 😉
 **/
//todo 1
const bill = 275;
const tip = bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
//todo 2
console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill + tip}`);
