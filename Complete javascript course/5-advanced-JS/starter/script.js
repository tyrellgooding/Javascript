// Function Contructor
/*
var john = {
    name: 'John',
    yearOfBirth: '1990',
    Job: 'Teacher'
};

var Person = function (name, yearOfBirth, Job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = Job;
}

Person.prototype.calculateAge = function () {
    console.log(2019 - this.yearOfBirth);
}

Person.prototype.lastName = 'Smithers';

var john = new Person('John', 1990, 'Teacher');
var jane = new Person('Jane', 1992, 'MUA');
var mark = new Person('Mark', 1948, 'Retired');

john.calculateAge();
jane.calculateAge();
mark.calculateAge();

console.log(john.name, john.lastName);
console.log(jane.name, jane.lastName);
console.log(mark.name, mark.lastName);
*/
///////////////////////////////////////////////////////////////////////
var Person = function(
  name,
  lastName,
  yearOfBirth,
  age,
  height,
  job,
  eyeColour,
  hairColour,
  skinColour
) {
  this.name = name;
  this.lastName = lastName;
  this.yearOfBirth = yearOfBirth;
  this.age = age;
  this.height = height;
  this.job = job;
  this.eyeColour = eyeColour;
  this.hairColour = hairColour;
  this.skinColour = skinColour;
};

Person.prototype.calculateAge = function() {
  console.log(new Date().getFullYear() - this.yearOfBirth);
};

var tyrell = new Person(
  "Tyrell",
  "Gooding",
  1996,
  23,
  5.11,
  "Software Developer",
  "Brown",
  "Auburn",
  "Mixed"
);

var corey = new Person(
  "Corey",
  "Gooding",
  1993,
  26,
  5.4,
  "Senior Technical Operator",
  "Brown",
  "Black",
  "Mixed"
);

var kobe = new Person(
  "Kobe",
  "Gooding",
  1999,
  20,
  5.1,
  "1st Line Analyst",
  "Brown",
  "Black",
  "Mixed"
);

var kelvin = new Person(
  "Kelvin",
  "Gooding",
  1993,
  26,
  5.6,
  "1st Line Analyst",
  "Brown",
  "Black",
  "Black"
);

console.log(tyrell);
console.log(corey);
console.log(kobe);
console.log(kelvin);
tyrell.calculateAge();
