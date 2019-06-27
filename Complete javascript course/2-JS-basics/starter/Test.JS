/************************
* Variable Names

var firstname = 'Tyrell';
var lastname = 'Gooding';
var age = '22';
var fullage = true;
var job = 'Software Developer';
console.log(firstname, lastname, age, job);
*/

/***********************
*Variable mutation and type coercion.

var firstname = 'Tyrell';
var age = '22';
var job, Experiance;
job = 'Software Developer';
Experiance = 'true';
console.log(firstname + ' is ' + age + ' Years Old ' + 'And is a ' + job);
*/

/***********************
 * Variable Mutation.
age = 'twenty two';
job = 'traning software developer';
alert('User 1');
var firstname = prompt('what is the users first name?');
var lastname = prompt('what is the users last name?');
console.log(firstname + ' ' + lastname);
*/

/***********************
 * Basic Operations


var year, yearTyrell, yearCorey;
now = 2018;
ageTyrell = 22;
ageCorey = 25;
 */

/************************
 * maths operators
yearTyrell = now - ageTyrell;
yearCorey = now - ageCorey;

console.log(now + 2);
console.log(now * 2);
console.log(now / 2);
console.log(now - 2);
 */

/************************
 * Logical operators
var tyrellOlder = ageTyrell < ageCorey;
console.log(tyrellOlder);
 */

/***********************
 *typeof operator
console.log(typeof tyrellOlder);
console.log(typeof ageCorey);
console.log(typeof "Tyrell is younger than Corey");
var x;
console.log(typeof x);
*/

/***********************
 * Operator precedence

var now = 2018;
var yearTyrell = 1996;
var fullage = 22;

/***********************
 *Multiple Operators
var isFullage = now - yearTyrell >= fullage; //true
ageTyrell = 22;
console.log(isFullage);

/***********************
 *Grouping
var ageCorey = now - yearTyrell;
var ageCorey = 25;
var average = (ageCorey + ageTyrell) / 2;
console.log(average);

/***********************
 *Multiple assignments

var x, y;
x = y = (3 + 5) * 4 - 6; // 8 * 4 - 6 // 32 - 6 // 26
console.log(x, y);

// More Operators
x *= 2;
console.log(x);
x += 10;
console.log(x);
x++;
console.log(x);

/***********************
 *Challenge 1

var massTyrell = 60; //kg
var massCorey = 57; //kg
var heightTyrell = 1.8; //meters
var heightCorey = 1.6; //meters

var BMITyrell = massTyrell / (heightTyrell * heightTyrell);
var BMICorey = massCorey / (heightCorey * heightCorey);
console.log(BMITyrell, BMICorey);

var coreyHigherBMI = BMICorey > BMITyrell;
console.log("Is Corey's BMI higher than Tyrells'?" + " ", coreyHigherBMI);

if (BMICorey > BMITyrell) {
  console.log("Corey has a larger BMI than Tyrell");
} else {
  console.log("Tyrell has a larger BMI than Corey");
}
*/

/************************
 * If / else Statements

var firstname = "Tyrell";
var carmake = "Audi";

if (carmake === "Audi") {
  console.log(firstname + " Has an Audi");
} else {
  console.log(firstname + " Has no Audi");
}

var carmake = false;
if (carmake) {
  console.log(firstname + " has an Audi");
} else {
  console.log(firstname + " does not have an Audi");
}

*/

/************************
 *Boolen logic


var firstname = "tyrell";
var age = "22";

if (age < 13) {
  console.log(firstname + " is a boy");
} else if (age >= 13 && age < 22) {
  console.log("is a teenager");
} else if (age >= 22 && age < 30) {
  console.log(firstname + " is a young man");
} else {
  console.log(firstname + " is a man");
}
 */

/************************
 *The Ternary Operator and Switch Statements
 */

//var firstname = "tyrell";
//var age = 22;

/************************
 * Ternary Operator
age >= 18
  ? console.log(firstname + " drinks beer.")
  : console.log(firstname + " is not old enough!");

var pub = age >= 18 ? " is allowed entry" : " cannot enter";
console.log(firstname + pub);
*/

/*Alternate code
if (age >= 18) {
  var pub = " is allowed entry";
} else {
  var pub = " cannot enter";
}
*/

/************************
 *switch statments
var job = "Software Developer";
switch (job) {
  case "Software Developer":
    console.log(firstname + " is training as a software developer!");
    break;
  case "drives":
    console.log(firstname + " drives an Audi A1");
    break;
  default:
    console.log(firstname + " does something else");
}

switch (true) {
  case age < 13:
    console.log(firstname + " is a boy");
    break;
  case age >= 13 && age < 22:
    console.log("is a teenager");
    break;
  case age >= 22 && age < 30:
    console.log(firstname + "is a young man");
    break;
  default:
    console.log(firstname + " is a man");
    break;
}
*/

/************************
 * Truthy and Falsy values and equlity operators


// falsy valied: undefined, null, 0, '', NAN
// truthy values: Not falsy values

var height;

height = 23;
if (height || height === 0) {
  console.log("Variable is defined");
} else {
  console.log("Variable has NOT been defined");
}

// Equality operators
if (height == "23") {
  console.log("The == operator does not type coercion!");
}
 */

/*Coding challenge 2

var scoretyrell = (89 + 120 + 103) / 3;
var scorecorey = (116 + 94 + 123) / 3;
var scorekobe = (150 + 95 + 85) / 3;
console.log(scoretyrell, scorecorey, scorekobe);

if (scorecorey > scoretyrell && scorecorey > scorekobe) {
  console.log("Corey has the most points with " + scorecorey + " points.");
} else if (scorekobe > scorecorey && scorekobe > scoretyrell) {
  console.log(" Kobe has the most points with " + scorekobe + " points");
} else if (scoretyrell > scorecorey && scoretyrell > scoretyrell) {
  console.log(" Tyrell has the most points with " + scoretyrell + " points");
} else {
  console.log(" All teams have drawed! ");
}

/*if (scorecorey > scoretyrell) {
  console.log("Corey's team wins with " + scorecorey + " points.");
} else if (scoretyrell > scorecorey) {
  console.log("Tyrell's team wins with " + scoretyrell + " points.");
} else {
  console.log("Both teams draw.");
}
*/

/************************
 * Functions


function calculateAge(birthYear) {
  return 2019 - birthYear;
}
var ageTyrell = calculateAge(1996);
var ageAmber = calculateAge(1997);
var ageKobe = calculateAge(1999);
var ageCorey = calculateAge(1993);
var ageKiarah = calculateAge(2018);
console.log(ageTyrell, ageAmber, ageCorey, ageKobe, ageKiarah);

function yearsUntilRetirment(Year, firstname) {
  var age = calculateAge(Year);
  var retirement = 65 - age;
  if (retirement > 0) {
    console.log(firstname + " retires in " + retirement + " years");
  } else {
    console.log(firstname + " is already retied.");
  }
}

yearsUntilRetirment(1996, "Tyrell");
yearsUntilRetirment(1997, "Amber");
yearsUntilRetirment(1999, "Kobe");
yearsUntilRetirment(1993, "Corey");
yearsUntilRetirment(1992, "Regina");
yearsUntilRetirment(2018, "Kiarah");
yearsUntilRetirment(1973, "Vicky");
yearsUntilRetirment(1973, "Clare");
yearsUntilRetirment(1974, "Otis");
yearsUntilRetirment(1932, "Bob");
 */

/*************************
  Function Statements and Expressions 
 

//function whatDoYouDo(job, firstName) { }

// Function Expression
var whatDoYouDo = function (job, firstName) {
  switch (job) {
    case "teacher":
      return firstName + " teaches kids how to code"
    case "driver":
      return firstName + " drives a cap in London"
    case "designer":
      return firstName + " designs websites";
    default:
      return firstname + ' does somehting else';
  }
};

console.log(whatDoYouDo('designer', 'tyrell'));
*/

/*************************
 * Arrays 

//Initialize new array 
var names = ['Tyrell', 'Kelvin', 'Corey'];
var years = new Array(1996, 1993, 1993);

console.log(names);
console.log(names.length);

//mutate array data
names[1] = 'Kobe';
names[names.length] = 'Amber';
names[names.length] = 'Kiarah';
console.log(names);
*/

/*Differnt Data types

var Tyrell = ['Tyrell', 'Gooding', 1996, 'April', 'false'];


Tyrell.push('grey');
Tyrell.unshift('Mr');
Tyrell.pop();
Tyrell.shift();
console.log(Tyrell);

console.log(Tyrell.indexOf(1996));

*/

/* Challenge 2

function tipCalculator(bill) {
  var percentage;
  if (bill < 50) {
    percentage = .2;
  } else if (bill >= 50 && bill < 200) {
    percentage = .15;
  } else {
    percentage = .1;
  }
  return percentage * bill;
}


var bills = [124, 48, 268];
var tips = [tipCalculator(bills[0]),
  tipCalculator(bills[1]),
  tipCalculator(bills[2])
];
var finalValues = [bills[0] + tips[0],
  bills[1] + tips[1],
  bills[2] + tips[2]
];

console.log(tips, finalValues);

*/

/* Objects and properties
 

var tyrell = {
  firstname: "Tyrell",
  lastName: "Gooding",
  birthYear: 1996,
  family: ["Corey", "Kobe", "Amber"],
  job: "Developer",
  calcAge: function() {
    this.age = 2018 - this.birthYear;
  }
};

tyrell.calcAge();
console.log(tyrell);


console.log(tyrell.firstname);
console.log(tyrell["lastName"]);
var x = "birthYear";
console.log(tyrell[x]);
*/

/* code challenge 4


var john = {
  fullName: "John Smith",
  mass: 72,
  height: 1.85,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

var mark = {
  fullName: "Mark Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function() {
    this.bmi = this.mass / (this.height * this.height);
    return this.bmi;
  }
};

console.log(john.calcBMI() > mark.calcBMI());

if (john.calcBMI() > mark.calcBMI()) {
  console.log(
    john.fullName +
      " has a higher BMI than Mark." +
      " Johns BMI is :" +
      john.bmi
  );
} else if (mark.bmi > john.bmi) {
  console.log(
    mark.fullName +
      " has a higher BMI than John." +
      " Marks BMI is :" +
      mark.bmi
  );
} else {
  console.log(john.fullName + mark.fullName + " Both have the same BMI");
}
 */

/* Loops and iteration
 */

//for (var i = 0; i <= 20; i += 2) {
//console.log(i);
//}

// i =1 , 0. < 10 true, log i to console, i++;
// i = 1, 1 < 10 true, log i to console, i++;
//....
// i = 9, 1 < 10 true, log i to console, i++;
// i = 10, 0 < 10 false, exit the loop;

/* 
var john = ["John", "Smith", 1990, "Boxer", false];
{
  for (var i = 0; i < john.length; i++);
  console.log(john, [i]);
}
*/

/*while loop
var i = 0;
while (i < john.length);
{
  console.log(john[i]);
  i++;
}
*/

/*Continue and Break Statment
var john = ["John", "Smith", 1990, "Boxer", false];

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") continue;
  console.log(john[i]);
}

for (var i = 0; i < john.length; i++) {
  if (typeof john[i] !== "string") break;
  console.log(john[i]);
}

//Looping backwards
for (var i = john.length - 1; i >= 0; i--) {
  console.log(john[i]);
}
*/

/* Code Challenge 5
var tyrell = {
  fullname: "Tyrell Gooding",
  bills: [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      //Percentage
      var percentage;
      var bill = this.bills[i];
      // console.log(bill);
      if (bill < 50) {
        percentage = 0.2;
        // console.log(bill, percentage);
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
        //console.log(bill, percentage);
      } else {
        percentage = 0.1;
        //console.log(bill, percentage);
      }
      //Add results to arrays
      this.tips[i] = bill * percentage;
      //console.log(this.tips[i]);
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

var corey = {
  fullname: "Corey Gooding",
  bills: [77, 475, 110, 45],
  calcTips: function() {
    this.tips = [];
    this.finalValues = [];

    for (var i = 0; i < this.bills.length; i++) {
      //Percentage
      var percentage;
      var bill = this.bills[i];
      // console.log(bill);
      if (bill < 50) {
        percentage = 0.2;
        // console.log(bill, percentage);
      } else if (bill >= 50 && bill < 200) {
        percentage = 0.15;
        //console.log(bill, percentage);
      } else {
        percentage = 0.1;
        //console.log(bill, percentage);
      }
      //Add results to arrays
      this.tips[i] = bill * percentage;
      //console.log(this.tips[i]);
      this.finalValues[i] = bill + bill * percentage;
    }
  }
};

function calcAverage(tips) {
  var sum = 0;
  for (var i = 0; i < tips.length; i++) {
    sum = sum + tips[i];
  }
}
tyrell.calcTips();
corey.calcTips();
console.log(tyrell, corey);
*/

// Javascript Behind The Scenes
