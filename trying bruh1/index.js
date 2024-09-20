/*'use strict'

let markMass1 = 78;  
let markHeight1 = 1.69;  
let johnMass1 = 92;  
let johnHeight1 = 1.95;  

let markMass2 = 95;  
let markHeight2 = 1.88;  
let johnMass2 = 85;  
let johnHeight2 = 1.76; 

let markBMI1 = markMass1 / (markHeight1 ** 2);
let johnBMI1 = johnMass1 / (johnHeight1 ** 2);

let markBMI2 = markMass2 / (markHeight2 ** 2);
let johnBMI2 = johnMass2 / (johnHeight2 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;
let markHigherBMI2 = markBMI2 > johnBMI2;

console.log("Test Data 1:");
console.log("Mark's BMI:", markBMI1.toFixed(2));
console.log("John's BMI:", johnBMI1.toFixed(2));
console.log("Does Mark have a higher BMI than John?", markHigherBMI1);

console.log("\nTest Data 2:");
console.log("Mark's BMI:", markBMI2.toFixed(2));
console.log("John's BMI:", johnBMI2.toFixed(2));
console.log("Does Mark have a higher BMI than John?", markHigherBMI2);*/


function calcTip(bill) {
    if (bill >= 50 && bill <= 300) {
      return bill * 0.15; 
    } else {
      return bill * 0.2;   
    }
  }
  
  let bills = [125, 555, 44];
  
  let tips = bills.map(calcTip);
  
  let total = bills.map((bill, index) => bill + tips[index]);
  
  console.log("Bills:", bills);
  console.log("Tips:", tips);
  console.log("Total:", total);
  