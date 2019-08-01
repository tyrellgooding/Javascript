// let and const

// const name6 = "Jane Smith";
// let age6 = "23";
// name6 = "Jane Miller";
// console.log(name6);

/*
//ES5
function driversLicence5(passedTest) {
  if (passedTest) {
    var firstName = "Emma";
    var yearOfBirth = 1998;
  }
  console.log(firstName + " was born in " + yearOfBirth + ".");
}

driversLicence5(true);

//ES6
function driversLicence6(passedTest) {
  let firstName = "Robot";
  const yearOfBirth = 2289;

  if (passedTest) {
    firstName = "Robot";
  }
  console.log(firstName + " was created in " + yearOfBirth + ".");
}

driversLicence6(true);

//const & let are not function scoped but Block Scoped
// var/ if, while, for = all one block.

// Lecture: Blocks and IIFEs

//ES6 IFFE
{
  const a = 1;
  let b = 2;
}

//ES5 IIFE
(function() {
  var c = 3;
})();

//Strings
let firstName = "Private";
let lastName = "Soap";
const yearOfBirth = 1990;

function calcAge(year) {
  return 2019 - year;
}

//ES5
//console.log("Hello my name is " + firstName + " " + lastName);

//ES6 console.log $ instead of + to make a string using a `
console.log(
  `This is ${firstName} ${lastName} reporting for duty. Today i am ${calcAge(
    yearOfBirth
  )} years old. Have you seen Captin Price?`
);

const fullName = `${firstName} ${lastName}`;
console.log(fullName.startsWith("j"));
console.log(fullName.endsWith("p"));
console.log(fullName.includes("Soap"));
console.log(`${firstName} `.repeat(5));

*/

/* Arrow Functions

const years = [1996, 1973, 1974, 1993, 1999];

// ES5
var ages5 = years.map(function(el) {
  return 2019 - el;
});
console.log(ages5);

// ES6
let ages6 = years.map(el => 2019 - el);
console.log(ages6);

ages6 = years.map((el, index) => `Age element ${index + 1}: ${2019 - el}.`);

ages6 = years.map((el, index) => {
  const now = new Date().getFullYear();
  const age = now - el;
  return `Age element ${index + 1}: ${age}. `;
});

console.log(ages6);
*/

/*
// Arrow Functions 2

//ES5
var box5 = {
  colour: "green",
  positions: 1,
  clickMe: function() {
    var self = this;

    document.querySelector(".green").addEventListener("click", function() {
      var str =
        "This is box number " +
        self.positions +
        " and it is " +
        self.colour +
        ".";
      alert(str);
    });
  }
};
box5.clickMe();

//ES6
const box6 = {
  colour: "green",
  positions: 1,
  clickMe: function() {
    document.querySelector(".green").addEventListener("click", () => {
      let str =
        "This is box number " +
        this.positions +
        " and it is " +
        this.colour +
        ".";
      alert(str);
    });
  }
};
box6.clickMe();

// ES5

function Person(name) {
  this.name = name;
}

Person.prototype.myFriends5 = function(friends) {
  var arr = friends.map(
    function(el) {
      return this.name + " is friends with " + el;
    }.bind(this)
  );

  console.log(arr);
};
var friends = ["Bob", "Jim", "Bert"];
new Person("Mia").myFriends5(friends);

// ES6
Person.prototype.myFriends6 = function(friends) {
  var arr = friends.map(el => `${this.name} is friends with ${el}`);

  console.log(arr);
};
var friends = ["Bob", "Jim", "Bert"];
new Person("Sam").myFriends6(friends);
*/

/*

// Destructuring

//ES5
var jim = ["Jim", 26];
// var name = jim[0];
// var age = jim[1];

//ES6 Destructed data stucture
const [name, age] = ["Tyrell", 23];
console.log(name);
console.log(age);

const obj = {
  firstName: "Josh",
  lastName: "Smith"
};

const {
  firstName,
  lastName
} = obj;
console.log(`${firstName} ${lastName}`);

const {
  firstName: a,
  lastName: b
} = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1996);
console.log(age2);
console.log(retirement);
*/


// Arrays 
/*
const boxes = document.querySelectorAll('.box');


//ES5 - To change nodelist to an array.
var boxesArr5 =
  Array.prototype.slice.call(boxes);
boxesArr5.forEach(function (cur) {
  cur.style.backgroundColor = 'dodgerblue';
});

//ES6
const boxesArr6 = Array.from(boxes);
Array.from(boxes).forEach(cur => cur.style.backgroundColor = 'dodgerblue');

//ES5 for loop 
/*
for (var i = 0; i < boxesArr5.length; i++) {

  if (boxesArr5[i].className === 'box blue') {
    //continue;
  }
  boxesArr5[i].textContent = 'I changed to Blue!';
}



//ES6 for loop
for (const cur of boxesArr6) {
  if (cur.className.includes('blue') === 'box blue') {
    continue;
  }
  cur.textContent = 'I changed to Blue!';
}



//ES5 
var ages = [12, 17, 8, 21, 14, 11];

var full = ages.map(function (cur) {

  return cur >= 18;

});

console.log(full);
console.log(full.indexOf(true));
console.log(ages[full.indexOf(true)]);

//ES6
console.log(ages.findIndex(cur => cur >= 18));
console.log(ages.find(cur => cur >= 18));
*/

// Spread Operator
/*
function addFourAges(a, b, c, d) {
  return a + b + c + d;
}

var sum1 = addFourAges(21, 18, 9, 56);
console.log(sum1);

//ES5
var ages = [21, 18, 9, 56];
var sum2 = addFourAges.apply(null, ages);
console.log(sum2);

//ES6 ... = spread operator - expands and selects all componenets in the array.
const sum3 = addFourAges(...ages);

console.log(sum3);

const familyGooding = ['Tyrell', 'Kobe', ' Corey', 'Otis', 'Vicky'];
const familyButler = ['Clare', 'Amber', 'Mango'];

const wholeFamily = [...familyButler, ...familyGooding];
console.log(wholeFamily);


const h = document.querySelector('h1');
const boxes = document.querySelectorAll('.box');
const all = [h, ...boxes];
Array.from(all).forEach(cur => cur.style.color = 'purple');
*/

// Rest parameters
/*
//ES5

function isFullAge5() {

  console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments);

  argsArr.forEach(function (cur) {

    console.log(2019 - cur >= 18);

  });
}

//isFullAge5(1990, 1995, 2002, 1982, 2014);


//ES6
function isFullAge6(...years) {
  years.forEach(cur => console.log(2019 - cur <= 18));
}

isFullAge6(1990, 1995, 2002, 1982, 2014);


//ES5
function isFullAge5(limit) {

  //console.log(arguments);
  var argsArr = Array.prototype.slice.call(arguments, 1);
  argsArr.forEach(function (cur) {

    //console.log(2019 - cur >= 18);

  });
}

isFullAge5(1990, 1995, 2002, 1982, 2014);


//ES6
function isFullAge6(limit, ...years) {
  years.forEach(cur => console.log(2019 - cur <= limit));
}

isFullAge6(1990, 1995, 2002, 1982, 2014);


//Default Parameters
//ES5
// function BulterPerson(firstName, yearOfBirth, lastName, nationality) {
//   lastName === undefined ? lastName = 'Bulter' : lastName = lastName;
//   nationality === undefined ? nationality = 'British' : nationality = nationality;

//   this.firstName = firstName;
//   this.yearOfBirth = yearOfBirth;
//   this.lastName = lastName;
//   this.nationality = nationality;

// }

// var Clare = new BulterPerson('Clare', 1972);
// var Amber = new BulterPerson('Amber', 1997, 'Butler', 'British & Jamacian Mix');
// var Mango = new BulterPerson('Mango', 2018, 'Gooding')

// console.log(BulterPerson);


//ES6

function GoodingPerson(firstName, yearOfBirth, lastName = 'Gooding', nationality = 'British') {

  this.firstName = firstName;
  this.yearOfBirth = yearOfBirth;
  this.lastName = lastName;
  this.nationality = nationality;
}

var kobe = new GoodingPerson('Kobe', 1999);
*/


//Maps
/*
const question = new Map();
question.set('question 1', 'What year is it?');
question.set(1, 2019);
question.set(2, 2012);
question.set(3, 1996);
question.set(4, 1901);
question.set('Correct', 1);
question.set(true, 'Correct answer :D');
question.set(false, 'Wrong answer, please try again!');

console.log(question.get('question 1'));
//console.log(question.size);

if (question.has(4)) {
  //   //Delete key from map
  //   //question.delete(4);
}

//Clears map
//question.clear();

//question.forEach((value, key) => console.log(`This is ${key}, and it's set to: ${value}. `));
for (let [key, value] of question.entries()) {

  if (typeof (key) === 'number') {
    console.log(`Answer ${key}:${value}`);

  }
};

const ans = parseInt(prompt('Write the correct answer:'));
console.log(question.get(ans === question.get('Correct')));
*/