'use strict'
//створюєм клас "мавпа"
//Абстракція
function Mavpa(manky) { //клас Mavpa - конструктор нового обєкту
	this.name = manky;
	this.leg = 2;
};
Mavpa.prototype.jump = function () { //властивість
	console.log('jump!');
};
//створюєм клас "міщанин"
function Citizen(name2) {
	Mavpa.apply(this, arguments); //функціональне наслідування
	var hand = 2; // Інкапсуляція
};
Citizen.prototype = Object.create(Mavpa.prototype); //прототипне наслідування
Citizen.prototype.constructor = Citizen; //перевизначання сонструктора
Citizen.prototype.speak = function () {
		console.log('Speak!');
	}
	//створюєм обєкти "sityCitizen"
var arr = ['Masha', 'Olja', 'Roman', 'Mykyta', 'Vasyl', 'Petro', 'Vika', 'Anja', 'Hrystyna'];
var sityCitizen = [];
for (let i = 0; i < arr.length; i++) {
	sityCitizen[i] = new Citizen(arr[i]);
}
//створюєм клас "коп"
function Cop(name2) {
	Citizen.apply(this, arguments); //функціональне наслідування
	var job = true;
};
Cop.prototype = Object.create(Citizen.prototype); //прототипне наслідування
Cop.prototype.constructor = Cop;
Cop.prototype.drive = function () { //поліморфізм, однакові назви різний результат
		console.log('drive!');
	}
	//створюєм обєкти "sityCop"
var arrCop = ['Masha', 'Roman', 'Vasyl'];
var sityCop = [];
for (let i = 0; i < arr.length; i++) {
	sityCop[i] = new Citizen(arrCop[i]);
}
//створюєм клас "мер"
function Mer(name2) {
	Cop.apply(this, arguments); //функціональне наслідування
	var job = "mer";
};
Mer.prototype = Object.create(Cop.prototype); //прототипне наслідування
Mer.prototype.constructor = Mer;
Mer.prototype.Manage = function () { //поліморфізм, однакові назви різний результат
		console.log('Yes!');
	}
	//створюєм обєкт "sityCop"
var mer = new Mer('Mer1');