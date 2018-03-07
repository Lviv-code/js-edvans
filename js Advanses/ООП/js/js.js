'use strict'

//var schoolboy = {};
//    schoolboy.schoolnumber = 57; 
//    schoolboy.name = "Ira"; 
//
//
//function teacher(name) {
//    this.name = "Olga";
//    this.age = 32;
//    this.Subject = "Mathematics";
//  }
//    teacher.prototype = schoolboy;
//
//
//function director(name) {
//    this.name = "Petro";
//    this.Subject =  "Chemistry"
//  }
//    teacher.director = schoolboy;


//Абстракція
function Adam(name2){
    this.name = name2;
};

Adam.prototype.run = function(){
    console.log('Run!');
};

//Наслідування
function Eva(name2){
    Adam.apply(this, arguments);//функціональне наслідування
    var age = 23;
    
    Eva.prototype.getAge = function(){
        return age;
    }
    
    Eva.prototype.setAge = function(b){
        age = b;
    }
    
};

Eva.prototype = Object.create(Adam.prototype);//прототипне наслідування
Eva.prototype.constructor = Eva;

Eva.prototype.run = function(){//поліморфізм, однакові назви різний результат
    console.log('Stop!');
}

var oxana = new Eva ('Oxana');
oxana.run();
console.log(oxana.getAge());
oxana.setAge(38);
console.log(oxana.getAge());