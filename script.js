// Declaring all buttons, main-Display and side-Display as variables...
let mainDisplay = document.getElementById("main-display");// main-display
let sideDisplay = document.getElementById("side-display");// side-display
let numbers = document.getElementsByClassName("num");// numeric btns + decimal btn
let btn1 = document.getElementById("item13"); // num 1
let btn2 = document.getElementById("item14");// num 2
let btn3 = document.getElementById("item15");// num 3
let btn4 = document.getElementById("item10");// num 4
let btn5 = document.getElementById("item11");// num 5
let btn6 = document.getElementById("item12");// num 6
let btn7 = document.getElementById("item7");// num 7
let btn8 = document.getElementById("item8");// num 8
let btn9 = document.getElementById("item9");// num 9
let btn0 = document.getElementById("item16");// num 0
let btnDecimal = document.getElementById("item17");// num .
let btnPlus = document.getElementById("item2");// Plus btn
let btnMinus = document.getElementById("item3");// Minus btn
let btnMultiply = document.getElementById("item4");// Multiply btn
let btnDivide = document.getElementById("item5");// Divide btn
let clearBtn = document.getElementById("item18");// clear btn
let delBtn = document.getElementById("item19");// del btn
let equalBtn = document.getElementById("item6");// equals btn
// Declaring 1st and 2nd amount as global variables...
var amount1;
var amount2;
// Creating operators object which contains operators as keys and functions as their values...
var operators = {
    '+': function(a, b){ return a+b},
    '-': function(a, b){ return a-b},
    '*': function(a, b){ return a*b},
    '/': function(a, b){ return a/b},
 }
 // Finally adding event listeners to operator btns...
btnPlus.addEventListener("click",event=>clickOperator(event,'+',"&#43;"),false);
btnMinus.addEventListener("click",event=>clickOperator(event,'-',"&#8722;"),false);
btnMultiply.addEventListener("click",event=>clickOperator(event,'*',"&#215;"),false);
btnDivide.addEventListener("click",event=>clickOperator(event,'/',"&#247;"),false);
// Creating clickNum function which on execution, adds event listeners to numeric buttons...
// This function is nested in main event listener function...
const clickNum = () => {
  for (i = 0; i < numbers.length; i++) {
    numbers[i].onclick = function () {
      var inp = this.innerHTML;
      mainDisplay.innerHTML += inp;
      if (mainDisplay.innerHTML.length >= 11) {
        let value = mainDisplay.innerHTML.substring(0, 12);
        mainDisplay.innerHTML = value;
      }
    };
  }
};
// Creating addSign function which on execution adds event listener to equals btn and gives the result...
// it takes operator(in form of string) and operator code(in form of HTML entity) as 1st and 2nd parameters...
function addSign(sign,code) {
    equalBtn.onclick  = ()=>{
        amount2 = Number(mainDisplay.innerHTML);
        const sum = operators[sign](amount1,amount2);
        sideDisplay.innerHTML =
        amount1.toString() + code + amount2.toString() + "=";
        mainDisplay.innerHTML = sum.toString();
    }
};
clickNum();// executing clickNum function...
// Creating clickOperator event(this parameter is  note used), operator string and html entity as 1st,2nd and 3rd parameter...
function clickOperator(event,sign,code){
        if (mainDisplay.innerHTML == "") {
          return;
        } else {
          amount1 = Number(mainDisplay.innerHTML);
          sideDisplay.innerHTML = amount1.toString() + code;
          mainDisplay.innerHTML = "";
          clickNum();
          addSign(sign,code);
        }
      };
// Adding event listener to Clear btn...
clearBtn.onclick = function () {
    mainDisplay.innerHTML = "";
    sideDisplay.innerHTML = "";
};
// Adding event listener to Del btn...
delBtn.onclick = function () {
    mainDisplay.innerHTML = mainDisplay.innerHTML.slice(
      0,
      mainDisplay.innerHTML.length - 1
    );
};
// Adding event listener for keyboard btns...
document.addEventListener(
  "keydown",
  (event) => {
    var name = event.key;
    if (name == "1") {
      btn1.click();
    }
    if (name == "2") {
      btn2.click();
    }
    if (name == "3") {
      btn3.click();
    }
    if (name == "4") {
      btn4.click();
    }
    if (name == "5") {
      btn5.click();
    }
    if (name == "6") {
      btn6.click();
    }
    if (name == "7") {
      btn7.click();
    }
    if (name == "8") {
      btn8.click();
    }
    if (name == "9") {
      btn9.click();
    }
    if (name == "0") {
      btn0.click();
    }
    if(name=="Enter"){
        equalBtn.click();
    }
  },
  false
);