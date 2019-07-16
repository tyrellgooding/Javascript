/*
var budgetController = (function () {
    var x = 23;

    //Private add function.
    var add = function (a) {
        return x + a;
    }

    return {
        publicTest: function (b) {
            return add(b); //<-- Closure
        }
    }

})();

//Independant Module
var controller = (function (budgetCtrl, UICtrl) {

    var z = budgetCtrl.publicTest(5);
    return {
        anotherPublic: function () { //<-- Method 
            console.log(z);
        }
    }
})(budgetController, UIController);

*/

// BUDGET CONTROLLER
var budgetController = (function () {

    //Code

})();


// UI CONTROLLER
var UIController = (function () {

    //Code

})();



// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {

    var ctrlAddItem = function () {

        // 1. Get the field input data.
        //2. Add the item to the budget controller.
        //3. Add the item to the UI.
        //4. calculate the budget.
        //5.Display the budget on the UI.
        console.log('it works');
    }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function (event) {
        if (event === 13 || event.which === 13) {
            ctrlAddItem();
        }

    });

})(budgetController, UIController);