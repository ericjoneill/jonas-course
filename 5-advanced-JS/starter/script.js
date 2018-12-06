// Function constructor

// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth)
// }

// Person.prototype.lastName = 'Smith'


// var john = new Person('John', 1990, 'teacher');

// john.calculateAge();

// var jane = new Person('Jane', 1969, 'designer');

// jane.calculateAge()

// var mark = new Person('Mark', 1948, 'retired')

// mark.calculateAge()

// console.log(mark.lastName)


































// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth)
// }






// var Pokemon = function(name,attack, defense, speed){
//     this.name = name;
//     this.attack = attack;
//     this.defense = defense;
//     this.speed = speed;
// }

// var magikarp = new Pokemon('mighty',.1,.1,.4);

// Pokemon.prototype.calcViable = function(){
//     this.speed > .5 ? console.log(this.name + ' is viable!') :
//     console.log(this.name + ' is not viable. Sad!')
// }

// magikarp.calcViable()




// var Person = function(name, yearOfBirth, job){
//     this.name = name;
//     this.yearOfBirth = yearOfBirth;
//     this.job = job;
// }

// Person.prototype.calculateAge = function(){
//     console.log(2016 - this.yearOfBirth)
// }

// Person.prototype.lastName = 'Smith'


// var john = new Person('John', 1990, 'teacher');

// john.calculateAge();

// var jane = new Person('Jane', 1969, 'designer');

// jane.calculateAge()

// var mark = new Person('Mark', 1948, 'retired')

// mark.calculateAge()

// console.log(mark.lastName)

// Object.create

// var personProto = {
//     calculateAge: function(){
//         console.log(2016 - this.yearOfBirth)
//     }
// }

// var john = Object.create(personProto)
// john.name = 'John'
// john.yearOfBirth = 1990;
// john.job = 'teacher'

// var jane = Object.create(personProto, {
//     name: { value: 'Jane'},
//     yearOfBirth: { value: 1969 },
//     job: { value: 'designer'}
// })

// var years = [1990, 1965, 1937, 2005, 1998]

// function arrayCalc(arr, fn){
//     var arrRes = [];
//     for (let i = 0; i < arr.length; i++){
//         arrRes.push(fn(arr[i]));
//     }
//     return arrRes;
// }

// function calculateAge(el){
//     return 2016 - el;
// }
// function maxHeartRate(el){
//     if (el >= 18 && el <= 81){
//     return Math.round(206.9 - (0.67 - el));
//     } else{
//         return -1
//     }
// }

// function isFullAge(el){
//     return el >= 18
// }

// var ages = arrayCalc(years, calculateAge)
// var fullAges = arrayCalc(ages, isFullAge)
// var rates = arrayCalc(ages, maxHeartRate)


// console.log(rates)




// Lecture: Functions returning functions

// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//         console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// }


// var designerQuestion = interviewQuestion('designer')
// var teacherQuestion =  interviewQuestion('teacher')

// teacherQuestion('Eric')
// teacherQuestion('Elmo')
// designerQuestion('Shady')

// interviewQuestion('hell')('Satan')



// function whatType(t){
//     if (t === 'breeder'){
//         return function(n){
//             console.log(n + ' is a ' + t + ' who is always at the DCC.')
//         }
//     } else if (t === 'pokemaniac'){
//         return function(n){
//             console.log('watch out! ' + n + ' is known as a ' + t + '.')
//         }
//     } else if (t === 'gym leader'){
//         return function(n){
//             console.log('Wow, a ' + t + '! ' + n + ' must raise good pkmn.')
//         }
//     } else{
//         return function(n){
//             console.log('I think ' + n + ' is just an ordinary trainer.')
//         }
//     }
// }


// var breeder = whatType('breeder');
// var pokemaniac = whatType('pokemaniac');
// var leader = whatType('leader');

// pokemaniac('Alan')
/*
function game(){
    var score = Math.random() * 10;
    console.log(score >= 5)
}
game()
*/


// (function(goodLuck){
//         var score = Math.random() * 10;
//         console.log(score >= 5 - goodLuck)
//     })(5);

// console.log(score)

// function retirement(retirementAge){
//     return function(name){
//         return name + ' will retire in ' + (66 - retirementAge) + ' years.'
//     }
// }

// console.dir(retirement)

// var addTo = function(passed){

//     var add = function(inner){
//         return passed + inner;
//     };

//     return add;
// }

// console.dir(addTo(9))

// function retirement(retirementAge){
//     var a = ' years left until retirement.'
//     return function(yearOfBirth){
//         var age = 2016 - yearOfBirth;
//         console.log((retirementAge - age) + a)
//     }
// }

// var retirementUS = retirement(66);
// var retirementGermany = retirement(65);
// var retirementIceland = retirement(67);

// retirementGermany(1990);
// retirementUS(1990);
// retirementIceland(1990);

// function interviewQuestions(name){
//     return function(job){
//         if(job === 'designer'){
//             console.log(name + ', tell me about your experience drawing stuff.')
//         } else if(job === 'developer') {
//             console.log('So ' + name + ', tell me about some apps you made.')
//         } else if(job === 'mogul' && name === 'LeBron'){
//             console.log('Hey, you\'re that basketball player ' + name + ' James!')
//         } else{
//             console.log('Sorry, we aren\'t recruiting under that type of job at this time.')
//         }
//     }
// }

// var lebron = interviewQuestions('LeBron');

// lebron('mogul')



// function interviewQuestion(job){
//     if (job === 'designer'){
//         return function(name){
//             console.log(name + ', can you please explain what UX design is?')
//         }
//     } else if (job === 'teacher'){
//         return function(name){
//         console.log('What subject do you teach, ' + name + '?')
//         }
//     } else {
//         return function(name){
//             console.log('Hello ' + name + ', what do you do?')
//         }
//     }
// }

// var john = {
//     name: 'John',
//     age: 26,
//     job: 'teacher',
//     presentation: function(style, timeOfDay){
//         if (style === 'formal'){
//             console.log('Good ' + timeOfDay + 
//             ', Ladies and gentlemen! I\'m '
//              + this.name + ', I\'m a ' + 
//              this.job + ' and I\'m ' + 
//              this.age + ' years old.');
//         } else if (style === 'friendly'){
//             console.log('Hey! What\'s up? I\'m a ' + 
//             this.job + ' and I\'m ' + 
//             this.age + ' years old. Have a nice ' + 
//             timeOfDay + '.')
//         }
//     }
// }

// var emily = {
//     name: 'Emily',
//     age: 35,
//     job: 'designer'
// }

// john.presentation('formal','morning')

// john.presentation.call(emily, 'friendly','evening')

// var johnFriendly = john.presentation.bind(john, 'friendly')

// johnFriendly('night')

// var emilyFormal = john.presentation.bind(emily, 'formal')

// emilyFormal('night')



var years = [1990, 1965, 1937, 2005, 1998]

function arrayCalc(arr, fn){
    var arrRes = [];
    for (let i = 0; i < arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calculateAge(el){
    return 2016 - el;
}

function isFullAge(limit, el){
    return el >= limit
}

var ages = arrayCalc(years, calculateAge)
var fullJapan = arrayCalc(ages, isFullAge.bind(this, 20))
console.log(ages)
console.log(fullJapan)