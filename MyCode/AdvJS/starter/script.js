function Question(theQuestion, answer, correct ){
    this.question = question;
    this.answer = answer;
    this.correct = correct;
}

Question.prototype.displayQuestion() {
    for (let i = 0; i < this.answer.length; i++){
        console.log(this.question);    
    }
    
}

let q1 = new Question('Is Javascript the coolest programming language in the world?', ['Yes', 'No',], 0);
let q2 = new Question('What is the name of this course\'s teacher?', ['John', 'Michael', 'Jonas'], 2);
let q3 = new Question('What best describes coding?', ['Boring', 'Hard', 'Fun'], 2);

let questions = [q1, q2, q3];

let n = Math.floor(Math.random() * questions.length);

questions[n];


