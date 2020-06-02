
var result_1;

function add() {
  var a = getFirstNumber();
  var b = getSecondNumber();
  var re = Number(a) + Number(b);
  sendResult(re);
}

function subtract() {
  var a = getFirstNumber();
  var b = getSecondNumber();
  var re = a - b;
  sendResult(re);
}

function times() {
  var a = getFirstNumber();
  var b = getSecondNumber();
  var re = a * b;
  sendResult(re);
}

function devide() {
  var a = getFirstNumber();
  var b = getSecondNumber();
  var re = a / b;
  sendResult(re);
}

function sendResult(result_1) {
  var num = document.getElementById("result")
  num.innerHTML = result_1;
}

function getFirstNumber() {
  var firstNumber = document.getElementById("first").value;
  return firstNumber;
}

function getSecondNumber() {
  var secondNumber = document.getElementById("second").value;
  return secondNumber;
}

function gender(){
	var person = prompt('please enter your gender','Male or Female');
	if(person == null || person == ""){
		alert( "Please write something");
	}
	else if(person == "Male"){
		alert("Hi Sir");
	}
	else if(person == "Female"){
		alert("Hi Madam")
	}
	else{
		alert("Please insert Male or Female")
	}	
}
function dark(){
	var element = document.body;
	element.classList.toggle("dark-mode");
}


function game(){

var a = prompt("input a number (1~1000)");
var b = Math.floor(Math.random()*1001);

    if(a > b){
        alert("Your number is too big, "+"the correct number is "+ b);
    }
            
    else if(a < b){
        alert("Your number is too small, "+"the correct number is "+ b);
    }
            
    else{
        alert("Congratulation!");
    } 
}

function switchcase(){
var look = prompt('Pleasw write 1 or 2 or 3');
switch(look){
	case '1':
	alert('Answer 1');
	break;

	case '2':
	alert('Answer 2');
	break;

	case '3':
	alert('Answer 3');
	break;

	default:
	alert("Please 1 or 2 or 3");
}
}

function Numbera(){
	var a = prompt('Please insert a number');
	var m = 1;
	var product = 1;
	do{
		m += 1;
		product = a * m;
	}
	while(product>=1000);
	alert(product);

}
