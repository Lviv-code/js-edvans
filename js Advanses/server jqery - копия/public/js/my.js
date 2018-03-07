'use strict'
$(document).ready(function () {
	//	function test(a.b.c) {
	//		return b;
	//	}
	//	console.log(test(3, 'kokos', {
	//		login: 'aaa'
	//	}));
	//   function Mavpa(){
	//	   
	//    };
	//
	//    Mavpa.prototype.jump = function(){
	//        console.log('jump!');
	//    };
	//	 
	//	function Citizen(){
	//        Mavpa.apply(this, arguments);//функціональне наслідування
	//		var hand = 2;//Інкапсуляція
	//    };
	//
	//    Citizen.prototype = Object.create(Mavpa.prototype);//прототипне наслідування
	//    Citizen.prototype.constructor = Citizen;//перевизначання сонструктора
	//
	//    Citizen.prototype.jump = function(){
	//		console.log('Yes!');
	//    }
	// Get Post Put Delete Trase Head Options Patch Connect - http 
	//	var o = {
	//		login: "kokos"
	//	}
	//	console.log(o);
	//	var obj = {
	//		login: 'aaa'
	//		, pass: {
	//			lolo: '123'
	//		}
	//	};
	//	console.log(obj);
	//	var objJson = JSON.stringify(obj);
	//	console.log(objJson);
	//	var newObj = JSON.parse(objJson);
	//	console.log(newObj);
	
	    $('#Take').on('click', function () {
        $.ajax({
            url: 'http://localhost:8000/test',
            success: function (html) {
                $("#Res").append(html);
            },
            error: function () {
                alert('Failed!');
            }
        })

    })
})