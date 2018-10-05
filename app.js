// name variable
let name = 'Josh';
// constant variables
const states = 50;
// Basic addition
let x = 5 + 4;
console.log(x);
// If first letter is before or after L in the alpahbet
let code = name.charCodeAt(0) 
if (name.charCodeAt(0) > 76) {
    console.log("Back of the Line!")
} else {
    console.log("Next!")
};
// hello world
function sayHello(alert) {
    alert("Hello World!")
};
alert("Hello World!");
// Check age

function checkAge(person, age) {
    if (age < 21)
    alert("Sorry ${James} you aren't old enough to view this page")
};
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
// Array veggies
let veggies = ['squash', 'ocra', 'radishes', 'carrots'];
for(let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}