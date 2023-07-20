const button1=document.getElementById("1");
button1.addEventListener("click",press);
const button2=document.getElementById("2");
button2.addEventListener("click",press);
const button3=document.getElementById("3");
button3.addEventListener("click",press);
const button4=document.getElementById("4");
button4.addEventListener("click",press);
const button5=document.getElementById("5");
button5.addEventListener("click",press);
const button6=document.getElementById("6");
button6.addEventListener("click",press);
const button7=document.getElementById("7");
button7.addEventListener("click",press);
const button8=document.getElementById("8");
button8.addEventListener("click",press);
const button9=document.getElementById("9");
button9.addEventListener("click",press);
const button0=document.getElementById("0");
button0.addEventListener("click",press);
const button_back=document.getElementById("back");
button_back.addEventListener("click",back);
const C=document.getElementById("C");
C.addEventListener("click",C_button);  
const percent=document.getElementById("percentage");
percent.addEventListener("click",percentage);
const dot=document.getElementById("dot");
dot.addEventListener("click",dot_button);
const equal=document.getElementById("equal");
equal.addEventListener("click",equal_button);
const plus=document.getElementById("plus");
plus.addEventListener("click",plus_button);
const minus=document.getElementById("minus");
minus.addEventListener("click",minus_button);
const multiply=document.getElementById("multiply");
multiply.addEventListener("click",multiply_function);
const divide=document.getElementById("divide");
divide.addEventListener("click",divide_button);
const double_zero=document.getElementById("00");
double_zero.addEventListener("click",double_zero_button);
const M_plus=document.getElementById("M_plus");
M_plus.addEventListener("click",M_plus_button);
const M_minus=document.getElementById("M_minus");
M_minus.addEventListener("click",M_minus_button);
const M_b=document.getElementById("M_button");
M_b.addEventListener("click",M_button);


let screen=document.getElementById("screen");
screen.value=null;

function press(event){
    value=Number(screen.value);
    screen.value =  (screen.value) + Number(event.target.id);
    
}
function back(value){
    screen.value = screen.value.slice(0,-1);
}
function C_button(value){
screen.value=0;
}
function percentage(value){
screen.value = screen.value + "%";
}
function dot_button() {
    if (!screen.value.includes(".")) {
      screen.value += ".";
    }
  }
function plus_button(){
    screen.value = screen.value + "+";
}
function minus_button(){
    screen.value = screen.value + "-";
}
function multiply_function(){
    screen.value = screen.value + "*";
}
function divide_button(){
    screen.value = screen.value + "/";
}
function double_zero_button(){
    screen.value = screen.value + "00";
}
function equal_button() {
    try {
        if (screen.value.charAt(screen.value.length - 1) === "%") {
            let actual_number = screen.value.slice(0, -1);
            screen.value = Number(actual_number) / 100;
        } else {
            screen.value = eval(screen.value);
        }
    } catch (error) {
        screen.value = "Error";
    }
    
}

// function M_plus_button(){
// const data=screen.value;
// localStorage.setItem("message",data);

// } 
function M_plus_button() {
    const data = {
        value: screen.value,
        timestamp: new Date().getTime() + 60*1000, // Set expiration time to 1 minute from the current time
    };

    localStorage.setItem("message", JSON.stringify(data));
}


    // function M_minus_button() {   for storing without any timestamp
    //     if (localStorage.getItem("message")) {
    //         localStorage.removeItem("message");
    //         alert("Item removed from localStorage.");
    //     } else {
    //         alert("Item does not exist in localStorage.");
    //     }
    // }
    function M_minus_button() {
        if (localStorage.getItem("message")) {
            localStorage.removeItem("message");
            alert("Item removed from localStorage.");
        } else {
            alert("Item does not exist in localStorage.");
        }
    }
    function M_button() {
        const storedData = localStorage.getItem("message");
        if (storedData) {
            const data = JSON.parse(storedData);
            if (new Date().getTime() <= data.timestamp) {
                // Data is still valid
                screen.value += data.value;
                console.log("Data retrieved from localStorage.");
            } else {
                // Data has expired, remove it from localStorage
                localStorage.removeItem("message");
                console.log("Data has expired and removed from localStorage.");
            }
        } else {
            console.log("Data does not exist in localStorage.");
        }
    }   