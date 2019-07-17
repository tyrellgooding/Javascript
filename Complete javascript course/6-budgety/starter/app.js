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
    var Expense = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };
    var Income = function (id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    //Object // Data structure
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    };
    return {
        addItem: function (type, des, val) {
            var newItem, ID;

            // Create New ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
            } else {
                ID = 0;
            }
            // Create new item based on 'inc' or 'exp' type.
            if (type === "exp") {
                newItem = new Expense(ID, des, val);
            } else if (type === "inc") {
                newItem = new Income(ID, des, val);
            }

            // Push it into the data structures.
            data.allItems[type].push(newItem);

            //Return the new element.
            return newItem;
        }
    };
})();

// UI CONTROLLER // Public Function
var UIController = (function () {
    var DOMstrings = {
        inputType: ".add__type",
        inputDescription: ".add__description",
        inputValue: ".add__value",
        inputAddBtn: ".add__btn",
        incomeContainer: ".income__list",
        expensesContainer: ".expenses__list"
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be Inc or Exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: document.querySelector(DOMstrings.inputValue).value
            };
        },

        addListItem: function (obj, type) {
            // Create HTML Sting with placeholder text.
            var html, newHtml, element;

            if (type === "inc") {
                element = DOMstrings.incomeContainer;
                html =
                    '<div class="item clearfix" id="income-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div> <div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            } else if (type === "exp") {
                element = DOMstrings.expensesContainer;
                html =
                    ('<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div><div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>');
            }
            //Replace placeholder test with some data.
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", obj.value);

            //Insert HTML into the DOM.

            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);



        },

        getDOMstrings: function () {
            return DOMstrings;
        }
    };
})();

// GLOBAL APP CONTROLLER
var controller = (function (budgetCtrl, UICtrl) {
    var setupEventListners = function () {
        var DOM = UICtrl.getDOMstrings();

        document
            .querySelector(DOM.inputAddBtn)
            .addEventListener("click", ctrlAddItem);

        document.addEventListener("keypress", function (event) {
            if (event === 13 || event.which === 13) {
                ctrlAddItem();
            }
        });
    };

    var ctrlAddItem = function () {
        var input, newItem;

        // 1. Get the field input data.
        var input = UICtrl.getInput();

        //2. Add the item to the budget controller.
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        //3. Add the item to the UI.

        UICtrl.addListItem(newItem, input.type);


        //4. calculate the budget.
        //5.Display the budget on the UI.
    };

    return {
        init: function () {
            console.log("Application has started.");
            setupEventListners();
        }
    };
})(budgetController, UIController);

controller.init();