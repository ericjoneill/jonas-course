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
function maxHeartRate(el){
    if (el >= 18 && el <= 81){
    return Math.round(206.9 - (0.67 - el));
    } else{
        return -1
    }
}

function isFullAge(el){
    return el >= 18
}

var ages = arrayCalc(years, calculateAge)
var fullAges = arrayCalc(ages, isFullAge)
var rates = arrayCalc(ages, maxHeartRate)


console.log(rates)