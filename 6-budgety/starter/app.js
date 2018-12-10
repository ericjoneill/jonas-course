
// BUDGET CONTROLLER
var budgetController = (function(){

    var Expense = function(id, description, value){
        this.id = id
        this.description = description
        this.value = value
        this.percentage = -1
    }

    Expense.prototype.calcPercentage = function(totalIncome){
        if (totalIncome > 0){
        this.percentage = (this.value / totalIncome ) * 100
        } else {
            this.percentage = -1;
        }
    }

    Expense.prototype.getPercentage = function(){
        return this.percentage;
    }

    var Income = function(id, description, value){
        this.id = id
        this.description = description
        this.value = value
    }

    var calculateTotal = function(type){
        var sum;
        
        sum = 0;
        data.allItems[type].forEach(function(c){
            sum += c.value
        })
        data.totals[type] = sum;
        }

    var allExpenses = [];
    var allIncomes = [];
    var totalExpenses = [];

    var data = {
        allItems:{
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        },
        budget: 0,
        percentage: -1
    }

    return {
        addItem: function(type, des, val){
            var newItem, ID;


            // ID = lastID + 1
            // Create new ID
            if (data.allItems[type].length  > 0){
            ID = data.allItems[type][data.allItems[type].length - 1].id + 1
            } else {
                ID = 0;
            }
            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp'){
            newItem = new Expense(ID, des, val);
            } else if (type === 'inc'){
                newItem = new Income(ID, des, val)
            }

            // Push it into our data structure

            data.allItems[type].push(newItem)

            // Return the new element
            return newItem;


        },

        testing: function(){
            console.log(data)
        },
        deleteItem: function(type, id){
            var ids, index;
            
            // id = 6
            //data.allItems[type][id];
            // ids = [1 2 4  8]
            //index = 3
            
            ids = data.allItems[type].map(function(current) {
                return current.id;
            });

            index = ids.indexOf(id);

            if (index !== -1) {
                data.allItems[type].splice(index, 1);
            }
        },

        calculateBudget: function(){
            // calculate total income and expenses
            calculateTotal('exp')
            calculateTotal('inc')

            // Calculate the budget: income - expenses
            data.budget = data.totals.inc - data.totals.exp

            // Calculate the % of income that was spent
            if (data.totals.inc > 0){
            data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100)
            } else {
                data.percentage = -1;
            }
        },


        calculatePercentages: function(){
            /*
            a=20
            b=10
            c=40
            income = 100
            a=20/100=20%
            b=10/100=10%
            c=40/100=40%
            */
           data.allItems.exp.forEach(function(cur){
               cur.calcPercentage(data.totals.inc);
           })
        },

        getPercentage: function(){
            var allPerc = data.allItems.exp.map(function(cur){
                return cur.getPercentage();
            })
            return allPerc;
        },

        getBudget: function(){
            return {
                budget: data.budget,
                totalInc: data.totals.inc,
                totalExp: data.totals.exp,
                percentage: data.percentage
            }
        }
    }


    // var allExpenses = [];

    // var x = 23;

    // var add = function(a){
    //     return x + a;
    // }

    // return {
    //     publicTest: function(b){
    //         return add(b)
    //     }
    // }

})();

var Expense = function(id, description, value){
    this.id = id
    this.description = description
    this.value = value
}



// secret of the module pattern is that it returns an object
// containing all of the functions that we want to be public
// aka the functions we want to give the outside scope access to



//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn',
        incomeContainer: '.income__list',
        expensesContainer: '.expenses__list',
        budgetLabel: '.budget__value',
        incomeLabel: '.budget__income--value',
        expensesLabel: '.budget__expenses--value',
        percentageLabel: '.budget__expenses--percentage',
        container: '.container',
        expensesPercLabel: '.item__percentage'
    }

    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value, // + inc or - exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
            }
        },

        addListItem: function(obj, type){
            var html, newHtml, element;
            // Create HTML string with placeholder text
            if (type === 'inc'){
                element = DOMstrings.incomeContainer;
                html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">+ %value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            } else if (type === 'exp'){
                element = DOMstrings.expensesContainer
                html  = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">- %value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>'

            }
            // Replace the placeholder text with actual data
            newHtml = html.replace('%id%', obj.id);
            newHtml = newHtml.replace('%description%', obj.description)
            newHtml = newHtml.replace('%value%', obj.value)

            // Insert the HTML into the DOM
            document.querySelector(element).insertAdjacentHTML('beforeend', newHtml)

        },
        getDOMstrings: function(){
            return DOMstrings;
        },
        clearFields: function(){
            var fields, fieldsArr;

            fields = document.
            querySelectorAll(DOMstrings.
                inputDescription + ', ' + DOMstrings.inputValue)

            fieldsArr = Array.prototype.slice.call(fields)

            fieldsArr.forEach(function(current, index, array){
                current.value = ""
            })

            fieldsArr[0].focus()
        },
        displayPercentages: function(percentages){
            var fields = document.querySelectorAll(DOMstrings.expensesPercLabel)
//  REWATCH SECTION 6, LECTURE 96
            var nodeListForEach = function(list, callback){
                for (var i = 0; i < list.length;i++){
                    callback(list[i],i)
                }
            }

            nodeListForEach(fields, function(current, index){
                // Do stuff
                if (percentages[index] > 0){
                    current.textContent = percentage[index] + '%'
                } else{
                    current.textContent = percentage[index] + '--'
                }
            })


        },
        displayBudget: function(obj){
            document.querySelector(DOMstrings.budgetLabel).textContent = obj.budget
            document.querySelector(DOMstrings.incomeLabel).textContent = obj.totalInc
            document.querySelector(DOMstrings.expensesLabel).textContent = obj.totalExp
            if (obj.percentage > 0){
                document.querySelector(DOMstrings.percentageLabel).textContent = obj.percentage + "%"

            } else {
                document.querySelector(DOMstrings.percentageLabel).textContent = '--'

            }

        },
        deleteListItem: function(selectorID){
            var el = document.getElementById(selectorID);
            el.parentNode.removeChild(el)
        }
    }

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var setupEventListeners = function(){
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

        document.addEventListener('keypress', function(event){
            // console.log(event)
            if (event.keyCode === 13 || event.which === 13){
                ctrlAddItem();
            }
        })

        document.querySelector(DOM.container).addEventListener('click',ctrlDeleteItem)
    } 

    var updateBudget = function(){
        // 1. Calculate the budget
        budgetCtrl.calculateBudget()
        // 2. Return the budget
        var budget = budgetCtrl.getBudget()

        // 3. Display the budget on the UI
        UICtrl.displayBudget(budget)
        // 4. 
    }

    var updatePercentages = function(){
        // 1. Calcualte percentages
        budgetCtrl.calculatePercentages()
        // 2. Read percentages from the budget controller
        var percentages = budgetCtrl.getPercentage()
        // 3. Update UI with the new percentages
        // console.log(percentages)
        UICtrl.displayPercentages(percentages);
    }

    var ctrlAddItem = function(){
        var input, newItem;
        // TODO
        
        // 1. Get the filed input data

        input = UICtrl.getInput();

        if (input.description !== "" && !isNaN(input.value) && input.value > 0){

        // console.log(input)

        // 2. Add the item to the budget controller

        newItem = budgetCtrl.addItem(input.type, input.description, input.value);

        // 3. Add the item to the UI

        UICtrl.addListItem(newItem, input.type);

        // 4. Clear the fields
        UICtrl.clearFields()

        // 5. Calculate and update budget
        updateBudget();

        // 6. Calculate and update percentages
        updatePercentages();
        }

    }

    var ctrlDeleteItem = function (event){
        var itemID, splitID;

        itemID = event.target.parentNode.parentNode.parentNode.parentNode.id

        if (itemID){

            //inc-1
            splitID = itemID.split('-')
            type = splitID[0]
            ID = parseInt(splitID[1])

            // 1. Delete the item from the data structure
            budgetCtrl.deleteItem(type, ID);
            // 2. Delete the item from the UI
            UICtrl.deleteListItem(itemID)

            // 3. Update and show the new budget above the container
            updateBudget();

            //4. Calculate and update percentages
            updatePercentages();
        }
    }

    return {
        init: function(){
            console.log('Begin')
            UICtrl.displayBudget({
                budget: 0,
                totalInc: 0,
                totalExp: 0,
                percentage: -1
            });
            setupEventListeners();
        }
    }

    // var z = budgetCtrl.publicTest(5)

    // return {
    //     anotherPublic: function(){
    //         console.log(z);
    //     }
    // }

})(budgetController, UIController)

controller.init();