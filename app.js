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

function checkAge(name, age) {
    if (age < 21)
        // alert("Sorry " + name + " you aren't old enough to view this page")
        alert(`Sorry, ${name}, you're not enough to view this page, fam!`);
};
checkAge('Charles', 21);
checkAge('Abby', 27);
checkAge('James', 18);
checkAge('John', 17);
// Array veggies
let veggies = ['squash', 'ocra', 'radishes', 'carrots'];
for (let i = 0; i < veggies.length; i++) {
    console.log(veggies[i]);
}
// name and age array and loops
let person = [
    { fname: 'Joel', age: 23 },
    { fname: 'Devin', age: 27 },
    { fname: 'Jordan', age: 20 },
    { fname: 'Nathan', age: 14 },
    { fname: 'Jeff', age: 44 }
];
for (let i = 0; i < person.length; ++i) {
    // console.log(person[i].fname)
    // console.log(person[i].age)
    checkAge(person[i].fname,person[i].age)
};
// get length
// let word = 'Hello World';
// console.log(getLength(word.length))
function getLength(word) {
    return (word.length)
};
// getLength('Hello World');
let myvar = getLength('Hello World')
// getLength('Joshy')
console.log(myvar)
// let length = 11;
// ;
if(myvar % 2 === 0) {
    console.log('The world is nice and even!')
} else {
    console.log("The world is an odd place!")
}
