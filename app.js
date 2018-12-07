
// BUDGET CONTROLLER
var budgetController = (function(){

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



// secret of the module pattern is that it returns an object
// containing all of the functions that we want to be public
// aka the functions we want to give the outside scope access to



//UI CONTROLLER
var UIController = (function(){

    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputButton: '.add__btn'
    }

    return {
        getInput: function(){
            return {
            type: document.querySelector(DOMstrings.inputType).value, // + inc or - exp
            description: document.querySelector(DOMstrings.inputDescription).value,
            value: document.querySelector(DOMstrings.inputValue).value
            }
        },
        getDOMstrings: function(){
            return DOMstrings;
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
    } 

    var ctrlAddItem = function(){
        // TODO
        
        // 1. Get the filed input data

        var input = UICtrl.getInput();
        console.log(input)

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI


    }

    return {
        init: function(){
            console.log('Begin')
        }
    }

    // var z = budgetCtrl.publicTest(5)

    // return {
    //     anotherPublic: function(){
    //         console.log(z);
    //     }
    // }

})(budgetController, UIController)