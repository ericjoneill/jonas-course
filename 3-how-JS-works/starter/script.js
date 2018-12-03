///////////////////////////////////////
// Lecture: Hoisting

calculateAge(1980);

function calculateAge(year){
    console.log(2016 - year);
}

// retirement(1956)

var retirement = function(year){
    console.log(65 - (2016 - year))
}


// variables

console.log(age)

var age = 23;

function foo(){
    var age = 65
    console.log(age);
}

foo()
console.log(age)




///////////////////////////////////////
// Lecture: Scoping


// First scoping example


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         console.log(a + b + c);
//     }
// }




// Example to show the differece between execution stack and scope chain


// var a = 'Hello!';
// first();

// function first() {
//     var b = 'Hi!';
//     second();

//     function second() {
//         var c = 'Hey!';
//         third();
//     }
// }

// function third() {
//     var d = 'John';
//     console.log(c);
// }

// var p = 2;

// var cube = {
//     front:5,
//     back:6,
//     side:7,
//     p:10,
//     m: function(){
//         console.log(this.p);
//     }
    
// }

// cube.m()


///////////////////////////////////////
// Lecture: The this keyword



// console.log(this)

calculateAge()

function calculateAge(year){
    console.log(2016 - year)
    console.log(this)
}

var john = {
    name: 'John',
    yearOfBirth: 1990,
    calculateAge: function() {
        console.log(this);
        console.log(2016 - this.yearOfBirth);
        
        // function innerFunction() {
        //     console.log(this);
        // }
        // innerFunction();
    }
}

var mike = {
    name: 'Mike',
    yearOfBirth: 1984
};


mike.calculateAge = john.calculateAge;
mike.calculateAge();