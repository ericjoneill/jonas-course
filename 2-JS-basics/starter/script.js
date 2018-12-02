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

// var bills, tipF, tipped

// tipped = [];

// bills = [124, 48, 268];

// CHALLENGE 5

// var bills, tipF, tipped

// tipped = [];

// bills = [124, 48, 268, 180, 42];

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

// var bills, tipF, tipped, i, bill
// i = 0;
// bill = {
//     value: [124, 48, 268, 180, 42],
//     calcTip: function(){
//         for (let i = 0; i < this.value.length; i++){
//             var value = this.value[i];
//             this.tips = [];
//             if (value < 50){
//                 this.tips.push(value * .2)
//             } else if (value > 50 && value < 200){
//                 (this.tips.push(value * .15))
//             } else{
//                 (this.tips.push(value * .1))
//             }
//             // this.value[i] < 50 ? (this.tip.push(this.value * .2)) : 
//             // this.value[i] > 50 && this.value[i] < 200 ? (this.tip.push(this.value * .15)) :
//             // this.value[i] > 200 ? (this.tip.push(this.value * .1)) : 
//             // this.tip.push("an");

//         }
//         return this.tips;
//     }
// };

// bill.calcTip;

// console.log(bill)


// var bills = {
//     fullName: 'John Smith',
//     bills: [124, 48, 268, 180, 42],
//     calcTips: function() {
//         this.tips = []; // here is a new prop in our object
//         this.finalValues = []; // another new prop
//         for (var i = 0; i < this.bills.length; i++) // lets go through each bills
//         {
//             // Determine % based on tipping rules
//             var bill = this.bills[i]; // makes it easy and less typing
//             var percentage; // our % depending on if stuff
            
//             if (bill < 50){ // bill here = our bills prop
//                 percentage = .2;
//             } else if(bill >= 50 && bill < 200) {
//                 percentage = .15;
//             } else {
//                 percentage = .1;
//             }

//             // Add results to the corresponding arrays
//             this.tips[i] = bill * percentage;
//             this.finalValues[i] = bill + bill * percentage;
//         }
//     }
// }

// bills.calcTips()
// console.log(bills)




var john = {
    fullName: 'John Stamos',
    bills: [124, 48, 268, 180, 42],
    calcTips: function(){
        this.tips = [];
        this.finalValues = [];
        for (let i = 0; i < this.bills.length; i++){
            var tip;
            var bill = this.bills[i];
            var percentage;

            if (bill < 50){
                percentage = .2;
                } else if(bill >= 50 && bill < 200) {
                percentage = .15;
                } else {
                percentage = .1;
                }
            tip = bill * percentage;
            finalValue = bill + bill * percentage;
            this.tips[i] = tip;
            this.finalValues[i] = finalValue;

        }
    }
}



var mark = {
    fullName: 'Mark Graham',
    bills: [77, 375, 110, 45],
    calcTips: function(){
        this.tips = []
        this.finalValues = []
        for (let i = 0; i < this.bills.length; i++)
        {
            var bill = this.bills[i];
            var percentage;
            if (bill < 100){
                percentage = .2
            } else if (bill > 100 && bill < 300){
                percentage = .1
            } else{
                percentage = .25
            }
        this.tips[i] = bill * percentage
        this.finalValues[i] = bill + bill * percentage
        }
    }
}

mark.calcTips()
console.log(mark)

var takencompare = function(v){
    var total = 0;
    for (let i = 0; i < v.length; i++)
    {
        total += v[i];
    }
    return total / v.length;
}

var mTotal = takencompare(mark.tips);
var jTotal = takencompare(john.tips);


console.log(takencompare(jTotal))