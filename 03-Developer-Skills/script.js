// Remember, we're gonna use strict mode in all scripts now!
'use strict';
//@@ Using Google, StackOverflow and MDN
/**
 * ! PROBLEM 1:
 * ? We work for a company building a smart home thermometer. Our most recent task is this:
 * ? "Given an array of temperatures of one day, calculate the temperature amplitude.
 * ? Keep in mind that sometimes there might be a sensor error."
 * todo 1. Understanding the Problem
 * todo 2. Breaking up into sub-problem
 **/
const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

//todo 1.
// ? What is them amplitude?
// * ans: Difference between hightest and lowest temp
// ? How to computer max and min temperatures?
// ? What is a sensor error? And what do do?
//todo2
// ? How to ignore errors?
// * Find max value in temp array
// * Find min value in temp array
// * Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
  //* Difference between hightest and lowest temp
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    //* How to ignore errors?
    if (typeof curTemp !== 'number') continue;

    //* Find max value in temp array
    if (curTemp > max) {
      max = curTemp;
    }

    //* Find min value in temp array
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min); //8 1 test //17 -6

  //* Subtract min from max (amplitude) and return it
  return max - min;
};
//calcTempAmplitude([3, 7, 4, 1, 8]); test
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude); //23

/**
 * * ! PROBLEM 2:
 * ? Function should now receive 2 arrays of temps
 * todo 1. Understanding the problem
 * todo 2. Breaking up into sub-problems
 **/
// todo 1.
// ? With 2 arrays, should we implement functionality twice?
// * NO! Just merge two arrays
// todo 2.
// * Merge 2 arrays

const calcTempAmplitudeNew = function (t1, t2) {
  //* Merge 2 arrays
  //const array1 = ['a', 'b', 'c'];
  //const array2 = ['d', 'e', 'f'];
  //const array3 = array1.concat(array2);
  const temps = t1.concat(t2);
  console.log(temps);

  //* Difference between hightest and lowest temp
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    //* How to ignore errors?
    if (typeof curTemp !== 'number') continue;

    //* Find max value in temp array
    if (curTemp > max) {
      max = curTemp;
    }

    //* Find min value in temp array
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min); //8 1 test //17 -6

  //* Subtract min from max (amplitude) and return it
  return max - min;
};
//calcTempAmplitude([3, 7, 4, 1, 8]); test
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(amplitudeNew); //23

//@@ Debugging with the Console and Breakpoints
const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //* C. Fix
    //value: prompt('Degrees celsius:'),
    //value: Number(prompt('Degrees celsius:')),
    value: 10,
  };
  //console.log(measurement); //{type: "temp", unit: "celsius", value: "10"}
  //* B. Find
  console.table(measurement);
  // | (index)|   Value   |
  // ----------------------
  // |  type  |  "temp"   |
  // |  unit  | "celsius" |
  // | value  |	   "10"   |
  //////////////////////////
  // | (index)|   Value   |
  // ----------------------
  // |  type  |  "temp"   |
  // |  unit  | "celsius" |
  // | value  |	    10    |

  //console.log(measurement.value);
  //console.warn(measurement.value);
  //console.error(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
//* A. Identify
console.log(measureKelvin()); //10273 ,//283(Number)

//* Using a debugger
const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  console.log(temps);

  let max = 0;
  let min = 0;

  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];

    if (typeof curTemp !== 'number') continue;
    //* Using a debugger max, min
    //debugger;
    if (curTemp > max) {
      max = curTemp;
    }
    if (curTemp < min) {
      min = curTemp;
    }
  }
  console.log(max, min); //9 0
  return max - min;
};
const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
//* A. Identify
console.log(amplitudeBug); //9

/**
 * * Coding Challenge #1
 * ? Developer Skills & Editor Setup Coding Challenge #1vGiven an array of forecasted maximum temperatures,
 * ? the thermometer displays a string with the given temperatures.
 * ? Example: [17, 21, 23] will print "... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ..."
 * TODO Your tasks:
 * todo 1. Create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console. Try it with both test datasets.
 * todo 2. Use the problem-solving framework: Understand the problem and break it up into sub-problems!
 * ! Test data:
 * ! Data 1: [17, 21, 23]
 * ! Data 2: [12, 5, -5, 0, 4]
 **/
//todo 2
// ? 1.1 Understand the problem?
// * Array transformed to string, separated by ...
// ? What is the x day?
// * ans: index + 1
// ? 1.2 Breaking up into sub-problem
// * Transform array in string
// * Transform each element to string with ºC
// * String needs to contain day (index + 1)
// * Add ... between element and start and end of string
// * Log string to console
//todo 1
const data1 = [17, 21, 23];
const data2 = [12, 5, -5, 0, 4];

console.log(`... ${data1[0]}ºC ... ${data1[1]}ºC ... ${data1[2]}ºC ...`); //... 17ºC ... 21ºC ... 23ºC ...
const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `${arr[i]}ºC in ${i + 1} days ... `;
  }
  console.log('... ' + str); //... 17ºC in 1 days ... 21ºC in 2 days ... 23ºC in 3 days ...
};
printForecast(data1);
