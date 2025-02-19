/* Question 1
Write a function that takes two numbers and returns their sum.
 */

function sumOfTwoNumbers(num1, num2) {
    return num1 + num2;
}
console.log("The sum of two numbers is", sumOfTwoNumbers(84,93));
// OR
function theSum(num1,num2) {
    let sum = num1 + num2;
    return sum; 
}
console.log("This is the sum of two numbers",theSum(98, 99));

//Question 2. Print numbers from 1 to 10 using a for loop.
let number = [1,2,3,4,5,6,7,8,9,10];
 for (let i = 0; i< number.length; i++) {
console.log(`Here goes ${i+1} to ${number.length} using for loop ${i+1}`);
 }
 console.log("While the length of the array number is:",number.length);

 // Question 3. Write a for loop countdown to print 6 to 2

 for(let i= 6; i>=2; i--) {
    console.log("This is a countdown of",i);
 }

 // Question 4. Write a for loop that prints the multiplication table of 5.

 for(let i = 1; i <= 12;i++) {
    console.log(`5X${i} is ${5*i}`);
 }

 // Question 5. Create an array of 7 fruits and print the fruits using a loop.

 let fruits7 = ["Apple","Grape","Papaya","Orange","Carrot","Almond","Kiwi"];
 for(let i = 0; i < fruits7.length; i++) {
    console.log(`Fruit for index ${i} is ${fruits7[i]}`);
 }
