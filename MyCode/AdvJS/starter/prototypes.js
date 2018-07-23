// OBJECTS AND PROTOTYPES

let sydney= {
    name: 'Sydney',
    yearOfBirth: 1996,
    job: 'Web Developer'
}

let Person = function(name, yearOfBirth, job){
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    this.calculateAge = function(){
        console.log(2018 - this.yearOfBirth);
    }
}

Person.prototype.calculateAge = function(){
    console.log(2018 - this.yearOfBirth);
}

let sydney = new Person('Sydney', 1996, 'Web Developer');
console.log(sydney);
sydney.calculateAge();

let personProto = {
    calculateAge: function(){
        console.log(2016 - this.yearOfBirth);
    }
}

let sydney = Object.create(personProto);
sydney.name = 'Sydney';
sydney.yearOfBirth = 1996;
sydney.job = 'developer';
