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

function checkAge(fname,age) {
    if (fname, age < 21)
    alert("Sorry ${fname} you aren't old enough to view this page")
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
// name and age array and loops
let age = [ 
    { fname:'Joel', age: 23 },
    { fname:'Devin', age: 27 },
    { fname:'Jordan', age: 20 },
    { fname:'Nathan', age: 14 },
    { fname:'Jeff', age: 44 }
];
for(let i = 0; i < age.length; ++i) {
   console.log(checkAge(age))
};
// get length
let word = 'Hello World';
console.log(getLength(word.length))
function getLength(word) {
    return(word)
};
getLength('Hello World');

let length = 11;
console.log("The world is an odd place!");