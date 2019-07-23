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

    var calculateTotal = function (type) {
        var sum = 0;
        data.allItems[type].forEach(function (cur) {
            sum = sum + cur.value;
        });
        data.totals[type] = sum;
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
        },
        budget: 0,
        percentage: -1
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
        },
        calculateBudget: function () {
            //1. Calculate total income and expenses.
            calculateTotal("exp");
            calculateTotal("inc");
            //2. Calculate the budget: income - expenses.
            data.budget = data.totals.inc - data.totals.exp;
            //3. Calculate the % of income that we spent.
            if (data.totals.inc > 0) {
                data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
            } else {
                data.percentage = -1;
            }
        },

        getBudget: function () {
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            };
        },
        testing: function () {
            console.log(data);
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
        expensesContainer: ".expenses__list",
        budgetLable: ".budget__value",
        incomeLable: ".budget__income--value",
        expensesLable: ".budget__expenses--value",
        percentageLable: ".budget__expenses--percentage"
    };
    return {
        getInput: function () {
            return {
                type: document.querySelector(DOMstrings.inputType).value, // Will be Inc or Exp.
                description: document.querySelector(DOMstrings.inputDescription).value,
                value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
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
                    '<div class="item clearfix" id="expense-%id%"> <div class="item__description">%description%</div> <div class="right clearfix"> <div class="item__value">%value%</div><div class="item__percentage">21%</div> <div class="item__delete"> <button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button> </div> </div> </div>';
            }
            //Replace placeholder text with some data.
            newHtml = html.replace("%id%", obj.id);
            newHtml = newHtml.replace("%description%", obj.description);
            newHtml = newHtml.replace("%value%", obj.value);

            //Insert HTML into the DOM.
            document.querySelector(element).insertAdjacentHTML("beforeend", newHtml);
        },

        clearFields: function () {
            var fields, fieldsArr;
            fields = document.querySelectorAll(
                DOMstrings.inputDescription + ", " + DOMstrings.inputValue
            );

            fieldsArr = Array.prototype.slice.call(fields);

            //For each method

            fieldsArr.forEach(function (current, index, array) {
                current.value = "";
            });

            fieldsArr[0].focus();
        },



        displayBudget: function (obj) {
            document.querySelector(DOMstrings.budgetLable).textContent = obj.budget;
            document.querySelector(DOMstrings.incomeLable).textContent = obj.totalInc;
            document.querySelector(DOMstrings.expensesLable).textContent = obj.totalExp;

            if (obj.percentage > 0) {
                document.querySelector(DOMstrings.percentageLable).textContent =
                    obj.percentage + "%";
            } else {
                document.querySelector(DOMstrings.percentageLable).textContent = "---";
            }
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

    var updateBudget = function () {
        //1. calculate the budget.
        budgetCtrl.calculateBudget();
        //2. Return the budget.
        var budget = budgetCtrl.getBudget();
        //3.Display the budget on the UI.
        UICtrl.displayBudget(budget);
    };

    var ctrlAddItem = function () {
        var input, newItem;

        //1. Get the field input data.
        var input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0) {
            //2. Add the item to the budget controller.
            newItem = budgetCtrl.addItem(input.type, input.description, input.value);

            //3. Add the item to the UI.
            UICtrl.addListItem(newItem, input.type);

            //4. Clear the fields
            UICtrl.clearFields();

            //5. Calaulate and update budget.
            updateBudget();
        }
    };

    return {
        init: function () {
            console.log("Application has started.");
            UICtrl.displayBudget({
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            });
            setupEventListners();
        }
    };
})(budgetController, UIController);

controller.init();