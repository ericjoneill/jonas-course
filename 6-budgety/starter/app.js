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

var UIController = (function(){

    // Some code

})();

var controller = (function(budgetCtrl, UICtrl){

    // var z = budgetCtrl.publicTest(5)

    // return {
    //     anotherPublic: function(){
    //         console.log(z);
    //     }
    // }

})(budgetController, UIController)