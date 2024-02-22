
// 1-

// let userInput = prompt("Enter a number:");

// let number = parseFloat(userInput);

// console.log(number);

//   2-

// let numQ2=parseInt(prompt("enter number"));
// if (numQ2 %3===0 && numQ2 %4===0 ){
//     document.write("yes")
// }else {
//     document.write("no")
// }



    // 3-

// let number1 = prompt("3");
// let number2 = prompt("5");

// number1 = Number("3");
// number2 = Number("5");

// if (("3") || ("5")) {
//   alert("Invalid input. Please enter two numbers.");
// } else {

//   const maxNumber = Math.max(number1, number2);

//   // Print the maximum number
//   console.log("The maximum number is:", maxNumber);
// }

//    4-

// let numQ4=parseInt(prompt("enter number"));
// if (numQ4 <0 ){
//     document.write("negative")
// }else {
//     document.write("postive")
// }




// 5-

// let num1 = prompt("Enter the first integer:");
// let num2 = prompt("Enter the second integer:");
// let num3 = prompt("Enter the third integer:");


// let int1 = parseInt(num1);
// let int2 = parseInt(num2);
// let int3 = parseInt(num3);

// if ((int1) && !(int2) && !(int3)) {
//   var maxElement = Math.max(int1, int2, int3);
//   var minElement = Math.min(int1, int2, int3);

//   console.log("Maximum element: " + maxElement);
//   console.log("Minimum element: " + minElement);
// }



// 6-

// let vowel Or Not = prompt("Enter an integer:");

//     var number = parseInt(userInput);

//     if (!isNaN(number)) {
//       if (number % 2 === 0) {
//         console.log(even");
//       } else {
//         console.log("odd");
//       }
//     }



// 8-

// let char = prompt("Enter a character:");

// char = char.toLowerCase();

// if (['a', 'e', 'i', 'o', 'u'].includes(char)) {
//     console.log(char + " is a vowel.");
// } else {
//     console.log(char + " is a consonant.");
// }


// 9-

// let numQ9=parseInt(prompt("enter number"));
//  for(let i=1; i<=numQ9;i++){
//          document.write(i)
//  }



// 10-

// let numQ10=parseInt(prompt("enter number"));
//   for(let i=1; i<=12;i++){
//      document.write(numQ10*i+" ")
//   }



// 11-
// let numQ11=parseInt(prompt("enter number"));
// for(let i=1; i<=numQ11;i++){
//     if (i %2 ===0){
//         document.write(i +" ");
//      }
//  };

// 12-

// let marks = [];
// for (let i = 1; i <= 5; i++) {
//     let subjectMark = parseFloat(prompt("Enter marks for Subject " + i + ":"));
//     marks.push(subjectMark);
// }

// let total = marks.reduce(function (acc, mark) {
//     return acc + mark;
// }, 0);

// let average = total / 5;

// let percentage = (total / (5 * 100)) * 100;

// console.log("Total Marks: " + total);
// console.log("Average Marks: " + average);
// console.log("Percentage: " + percentage.toFixed(2) + "%");

// 13-

// function getDaysInMonth(monthNumber) {
//      if (monthNumber < 1 || monthNumber > 12) {
//          return "Invalid month number. Month number should be between 1 and 12.";
//      } else if (monthNumber === 2) {
//          return "Days in Month: 29";
//      } else if (monthNumber === 4 || monthNumber === 6 || monthNumber === 9 || monthNumber === 11) {
//          return "Days in Month: 30";
//      } else {
//          return "Days in Month: 31";
//      }
//  }
//  let monthNumber = parseInt(prompt("Enter the month number:"));
//  let result = getDaysInMonth(monthNumber);
//  document.write(result)


// 14-

// let physics = parseFloat(prompt("Enter marks for Physics:"));
// let chemistry = parseFloat(prompt("Enter marks for Chemistry:"));
// let biology = parseFloat(prompt("Enter marks for Biology:"));
// let mathematics = parseFloat(prompt("Enter marks for Mathematics:"));
// let computer = parseFloat(prompt("Enter marks for Computer:"));

// let totalMarks = physics + chemistry + biology + mathematics + computer;

// let percentage = (totalMarks / (5 * 100)) * 100;

// let grade;
// if (percentage >= 90) {
//     grade = 'A+';
// } else if (percentage >= 80) {
//     grade = 'A';
// } else if (percentage >= 70) {
//     grade = 'B';
// } else if (percentage >= 60) {
//     grade = 'C';
// } else if (percentage >= 50) {
//     grade = 'D';
// } else {
//     grade = 'F';
// }

// console.log(`Total Marks: ${totalMarks}`);
// console.log(`Percentage: ${percentage.toFixed(2)}%`);
// console.log(`Grade: ${grade}`);


