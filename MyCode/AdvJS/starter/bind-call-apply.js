
//BIND, CALL, and APPLY

let sydney = {
    name: 'Sydney',
    age: 22,
    job: 'developer',
    presentation: function(style, timeOfDay){
        if (style === 'formal'){
            console.log('Good ' + timeOfDay + " ladies and gentlement!  I'm " + this.name + ". I am a " + this.job + " and I am " + this.age + " years old." );
        } else if (style === 'friendly'){
            console.log();
            console.log("What's up this " + timeOfDay + ", guys!  I'm " + this.name + ". I'm a " + this.job + " and I'm " + this.age + " years old." );
        }
    }
}

sydney.presentation('friendly', 'morning');

let spencer = {
    name: 'Spencer',
    age: 19,
    job: 'designer'
}

sydney.presentation.call(spencer, 'formal', 'evening');


