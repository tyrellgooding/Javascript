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

// Destructuring

//ES5
var jim = ["Jim", 26];
// var name = jim[0];
// var age = jim[1];

//ES6
const [name, age] = ["Tyrell", 23];
console.log(name);
console.log(age);

const obj = {
  firstName: "Josh",
  lastName: "Smith"
};

const { firstName, lastName } = obj;
console.log(`${firstName} ${lastName}`);

const { firstName: a, lastName: b } = obj;
console.log(a);
console.log(b);

function calcAgeRetirement(year) {
  const age = new Date().getFullYear() - year;
  return [age, 65 - age];
}

const [age2, retirement] = calcAgeRetirement(1996);
console.log(age2);
console.log(retirement);
