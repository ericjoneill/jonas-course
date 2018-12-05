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




var Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person.prototype.calculateAge = function(){
    console.log(2016 - this.yearOfBirth)
}

Person.prototype.lastName = 'Smith'


var john = new Person('John', 1990, 'teacher');

john.calculateAge();

var jane = new Person('Jane', 1969, 'designer');

jane.calculateAge()

var mark = new Person('Mark', 1948, 'retired')

mark.calculateAge()

console.log(mark.lastName)