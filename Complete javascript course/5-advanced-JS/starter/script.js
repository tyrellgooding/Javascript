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

/////////////////////////////////////////////////
//Passing functions as an argument.

var years = [1990, 1965, 1937, 2006, 2011];

function arrayCalc(arr, fn) {
  var arrRes = [];
  for (var i = 0; i < arr.length; i++) {
    arrRes.push(fn(arr[i]));
  }
  return arrRes;
}

function calculateAge(el) {
  return 2019 - el;
}

function isFullAge(el) {
  return el >= 18;
}

function maxHeartRate(el) {
  if (el >= 18 && el <= 81) {
    return Math.round(206.9 - 0.67 * el);
  } else {
    return -1;
  }
}

var ages = arrayCalc(years, calculateAge);
var fullAges = arrayCalc(ages, isFullAge);
var rates = arrayCalc(ages, maxHeartRate);

console.log(ages);
console.log(rates);

//////////////////////////////////////////////////
// Functions returing functions

function interviewQuestion(job) {
  if (job === "designer") {
    return function (name) {
      console.log(name + ", Can you please explain what UX desgin is?");
    };
  } else if (job === "teacher") {
    return function (name) {
      console.log("What subject do you teach, " + name + "?");
    };
  } else if (job === "builder") {
    return function (name) {
      console.log(name + ', how long have you been a builder?')
    }
  } else {
    return function (name) {
      console.log('Hello ' + name + ', what do you do?');
    }
  }
}

var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
var builderQuestion = interviewQuestion('builder');
teacherQuestion('Daniel');
designerQuestion('Daniel');
builderQuestion('Jordan')
interviewQuestion()('Mark');


//////////////////////////////////////////////////
//IIFE

function game() {
  var score = Math.random() * 10;
  console.log(score >= 5);
}

game();


(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5);

})();

(function (goodLuck) {
  var score = Math.random() * 10;
  console.log(score >= 5 - goodLuck);

})(5);


//////////////////////////////////////////////////
// Closures

function retirement(retirementAge) {
  var a = " years left until retirement.";
  return function(yearOfBirth) {
    var age = 2019 - yearOfBirth;
    console.log(retirementAge - age + a);
  };
}

var retirementUS = retirement(66);
var retirementGER = retirement(65);
var retirementICE = retirement(67);

retirementGER(1990);
retirementICE(1990);
retirementUS(1990);

function interviewQuestion(job) {
  return function(name) {
    if (job === "software developer") {
      console.log(name + ", what was the last project you worked on?");
    } else if (job === "teacher") {
      console.log(name + ", how many years have you been teaching for?");
    } else {
      console.log(name + ", what is your dream job?");
    }
  };
}

interviewQuestion("teacher")("John");
interviewQuestion("software developer")("Daniel");
interviewQuestion("")("Mark");


//////////////////////////////////////////////////
// Bind, call and apply

var king = {
  name: "King Bueris",
  age: 26,
  job: "King of the country",
  presentation: function(style, timeOfDay) {
    if (style === "formal king") {
      console.log(
        "Hello all of my people, good " +
          timeOfDay +
          ". Today I'm going to dicuss what will change in this city." +
          " I " +
          this.name +
          " the " +
          this.job +
          ", will be the youngest king to bring order at the age of " +
          this.age +
          "."
      );
    } else if (style === "informal king") {
      console.log(
        "All of you people, this " +
          timeOfDay +
          " will be charged an extra 20% tax. Those who do not pay will be dealt with." +
          " I " +
          this.name +
          " the " +
          this.job +
          ", will be the richest king at the age of " +
          this.age +
          "."
      );
    } else if (style === "formal queen") {
      console.log(
        "Hello all of my people, good " +
          timeOfDay +
          ". Today I'm going to dicuss what will change in this city." +
          " I " +
          this.name +
          " the " +
          this.job +
          ", will be the youngest queen to bring order at the age of " +
          this.age +
          "."
      );
    } else if (style === "informal queen") {
      console.log(
        "All of you people, this " +
          timeOfDay +
          " will be charged an extra 90% tax. Those who do not pay will be dealt with." +
          " I " +
          this.name +
          " the " +
          this.job +
          ", will be the richest queen at the age of " +
          this.age +
          "."
      );
    }
  }
};

var emily = {
  name: "Emily",
  age: 35,
  job: "Queen of the country"
};

king.presentation("formal king", "morning");
king.presentation.call(emily, "formal queen", "evening");
king.presentation.apply(emily, ["informal queen", "morning"]);

var kingFormal = king.presentation.bind(king, "formal king");
kingFormal("morning");


//Challenge 7
//Invoked Function expression.
(function() {
  //Function Constructor
  function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
  }

  Question.prototype.displayQuestion = function() {
    console.log(this.question);
    for (var i = 0; i < this.answers.length; i++) {
      console.log(i + ": " + this.answers[i]);
    }
  };

  Question.prototype.checkAnswer = function(ans, callBack) {
    var sc;
    if (ans === this.correct) {
      console.log("Correct answer!");
      sc = callBack(true);
    } else ans != this.correct;
    {
      console.log(" Wrong answer!");

      sc = callBack(false);
    }

    this.displayScore(sc);
  };

  Question.prototype.displayScore = function(score) {
    console.log("Your current score is: " + score);
    console.log("-------------------");
  };
  //Question with Array of answers.
  var q1 = new Question(
    " What is the capital of England?",
    ["Paris", "London", "Lisbon"],
    1
  );

  var q2 = new Question(
    " What animal is the biggest?",
    ["Elephant", "Beetle", "Tiger", "Giraffe"],
    3
  );

  var q3 = new Question(" What is faster?", ["Car", "Speed Boat", "Jet"], 2);

  var questions = [q1, q2, q3];

  function score() {
    var sc = 0;
    return function(correct) {
      if (correct) {
        sc++;
      }
      return sc;
    };
  }

  var keepScore = score();

  function nextQuestion() {
    var n = Math.floor(Math.random() * questions.length);

    questions[n].displayQuestion();
    var answer = prompt("Please select the correct answer.");

    if (answer !== "exit") {
      questions[n].checkAnswer(parseInt(answer), keepScore);
      nextQuestion();
    }
  }
  nextQuestion();
})();
*/
