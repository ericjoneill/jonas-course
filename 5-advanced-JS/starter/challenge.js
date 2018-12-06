function init(){
    console.log(fire.options)
    var ans = prompt(fire.question)
    if (ans == fire.answer){
        alert('Nice!')
    } else {
        alert('sorry')
        console.log(ans + ' ' + fire.answer)
    }
}

// (function(randQ){
//         var score = Math.random() * 10;
//         console.log(score >= 5 - goodLuck)
//     })(0);

var Question = function(question, options, answer){
    this.question = question;
    this.options = options;
    this.answer = answer;
}

var fire = new Question('Super-effective against fire?', '0 - Water\n1 - Grass', 0);


init()