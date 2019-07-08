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


// Object.create

var personProto = {
  calculateAge: function() {
    console.log(2019 - this.yearOfBirth);
  }
};

var mark = Object.create(personProto);
(mark.name = "Mark"), (mark.yearOfBirth = 1986), (mark.job = "Bin Man");

var lucy = Object.create(personProto, {
  name: { value: "Lucy" },
  yearOfBirth: { value: 1992 },
  job: { value: "Personal Assistant" }
});


// Primitives vs objects.
var a = 23;
var b = a;
a = 46;

console.log(a);
console.log(b);

var obj1 = {
  name: "Mary",
  age: 26
};

//Objects
var obj2 = obj1;
obj1.age = 30;
console.log(obj1.age);
console.log(obj2.age);

//Functions
var age = 27;
var obj = {
  name: "Jonas",
  city: "Lison"
};

function change(a, b) {
  a = 30;
  b.city = "San Fransisco";
}

change(age, obj);
console.log(age);
console.log(obj.city);
*/
/////////////////////////////////////////////////
//Passing functions as an argument.

var years = [1990, 1965, 1937, 2006, 2011];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++){
    arrRes.push(fn(arr[i]));
  }
}