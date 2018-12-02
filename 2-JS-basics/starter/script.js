// var mMass, mHeight, jMass, jHeight, mBMI, jBMI, btr, ans;

// mMass = prompt('Mark\'s mass?');
// mHeight = prompt('Mark\'s height?');
// jMass = prompt('John\'s mass?');
// jHeight = prompt('John\'s height?');
// mBMI = mMass / mHeight^2;
// jBMI = jMass / jHeight^2;
// if (mBMI > jBMI){
//     alert('Mark is bigger.');
// } else{
//     alert('John is bigger.');
// }

// var job, name;

// name = prompt('What i your name');
// job = prompt('What do you do for a living')
// switch (job){
//     case 'trainer':
//     alert(name + ' is a pokemon trainer.');
//     break;
//     case 'doctor':
//     alert(name + ' saves peoples lives')
//     break;
//     default:
//     alert(name + ' is a professional ' + job + '.')
//     break;
// }

// = prompt('');
// = prompt('');
// = prompt('');
// = prompt('');

//falsy values: undefined, null, 0, '', NaN
//truthy values: 

// var jOne, jTwo, jTre, mOne, mTwo, mTre, jA, mA;

// jOne = 89;
// jTwo = 120;
// jTre = 103;
// mOne = 116;
// mTwo = 94;
// mTre = 123;

// jA = ((jOne + jTwo + jTre) / 3);
// mA = ((mOne + mTwo + mTre) / 3);

// jA > mA ? console.log('John wins!') : console.log('Mike wins!');

// function declaration
//function whatDoYouDo(job, firstName)

// Function expression
// var whatDoYouDo = function(job, firstName){
//     switch(job){
//         case 'teacher':
//         return firstName + ' teaches kids how to code';
//         case 'driver':
//         return firstName + ' is an Uber driver';
//         case 'designer':
//         return firstName + ' makes cool websites';
//         default:
//         return firstName + ' is a professional ' + job + '.';
//     }
// }

// console.log (whatDoYouDo('teacher', 'John'));

// var bills, tipF, tipped

// tipped = [];

// bills = [124, 48, 268];

// function howMuchToTip(much){
//     for (let i = 0; i < much.length; i++){
//         switch(true){
//             case much[i] < 50:
//             tipped.push(much[i] * .2);
//             break;
//             case much[i] > 50 && much[i] < 200:
//             tipped.push(much[i] * .15)
//             break;
//             case much[i] > 200:
//             tipped.push(much[i] * .1)
//             break;
//             default:
//             tipped.push('idk');
//             break;
//         }
//     }
//     return tipped;
// }

// console.log(howMuchToTip(bills));

// var john = {
//     firstName: 'John',
//     lastName: 'Smith',
//     birthYear: 1992,
//     family: ['Sally', 'James', 'Luther'],
//     job: 'teacher',
//     isMarried: false,
//     calcAge: function() {
//         this.age = 2018 - this.birthYear
//     }
// }

// john.calcAge();

// console.log(john);

var mMass, mHeight, jMass, jHeight, mBMI, jBMI, btr, ans;

mMass = 200
mHeight = 6
jMass = 250
jHeight = 7
mBMI = mMass / mHeight^2;
jBMI = jMass / jHeight^2;
// if (mBMI > jBMI){
//     alert('Mark BMI is greater. Mark vs John: ' + mBMI + ' & ' + jBMI + '.');
// } else{
//     alert('John BMI is greater. Mark vs John: ' + mBMI + ' & ' + jBMI + '.');
// }

var mark = {
    firstName: 'Mark',
    lastName: 'Hasselhoff',
    mass: 250,
    height: 7,
    favMovie: 'Aquaman',
    calcBMI: function(){ 
        this.BMI = this.mass / this.height^2
        return this.BMI
    }
    }

var john = {
    firstName: 'John',
    lastName: 'Brown',
    mass: 200,
    height: 6,
    favMovie: 'Antman',
    calcBMI: function(){ 
        this.BMI = this.mass / this.height^2
        return this.BMI
    }
}


// if (mark.calcBMI() === john.calcBMI()){
//     console.log('they are the same');
// } else if (mark.calcBMI() > john.calcBMI()){
//     console.log(mark.firstName + ' ' + mark.lastName + ' has a higher BMI.')
// } else {
//     console.log(john.firstName + ' ' + john.lastName + ' has a higher BMI.')
// }

// console.log(john, mark)