// Lecture: Hoisting
/*
calculateAge(1996);

function calculateAge(year) {
    console.log(2016 - year);
}

var carPrice = function (cost) {
    console.log(20000 - cost);
};
carPrice(16000);
var carAge = 5;
console.log(carAge);
*/


// Lecture: Scoping

// First scoping example

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        console.log(a + b + c);
    }
}
*/

// Example to show the differece between execution stack and scope chain

/*
var a = 'Hello!';
first();

function first() {
    var b = 'Hi!';
    second();

    function second() {
        var c = 'Hey!';
        third()
    }
}

function third() {
    var d = 'John';
    console.log(a + b + c + d);
}
*/


// Lecture: The this keyword


//console.log(this);

/*
calculateAge(1996);

function calculateAge(year) {
    console.log(2019 - year);
    console.log(this);

}
*/

var tyrell = {
    name: 'Tyrell',
    yearOfBirth: 1996,
    calculateAge: function () {
        console.log(this);
        console.log(2019 - this.yearOfBirth);

        /*
        function innerFunction() {
            console.log(this);
        }
        innerFunction();
        */
    }
}

tyrell.calculateAge();

var mike = {
    name: 'Mike',
    yearOfBirth: 1973
};

mike.calculateAge = tyrell.calculateAge;
mike.calculateAge();