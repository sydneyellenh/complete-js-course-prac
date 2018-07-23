//CLOSURES

function retirement(retirementAge){
    let a = ' years left until retirement.';
    return function(yearOfBirth){
        let age = 2018 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}

let retirementUS = retirement(66);
retirementUS(1996);


function interviewQuestion(job){
    return function(name){
        let question;
        if (job === 'designer'){
            question = "can you explain to me what UX design is?";
            console.log(name + ', ' + question);
        } else if (job === 'teacher'){
            question = "what subject do you teach?";
            console.log(name + ', ' + question);
        } else {
            question = "what can you do for us?";
            console.log(name + ', ' + question);
        }
    }
}

let interviewPeople = interviewQuestion('designer');
interviewPeople('Sydeny');