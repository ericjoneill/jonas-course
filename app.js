
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

    // Some code

})();


//GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl){

    var ctrlAddItem = function(){
        // TODO
        
        // 1. Get the filed input data

        // 2. Add the item to the budget controller

        // 3. Add the item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works.')
    }

    // var z = budgetCtrl.publicTest(5)

    // return {
    //     anotherPublic: function(){
    //         console.log(z);
    //     }
    // }

    document.querySelector('.add__btn').addEventListener('click', ctrlAddItem);

    document.addEventListener('keypress', function(event){
        // console.log(event)
        if (event.keyCode === 13 || event.which === 13){
            console.log('ENTER was pressed.')
        }
    })

})(budgetController, UIController)