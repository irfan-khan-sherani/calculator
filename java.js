let display = document.getElementById("display");

function appendToDisplay(value){
    display.textContent += value;
}

function clearDisplay(){
    display.textContent = "";
}

function calculateResult(){
    display.textContent = eval(display.textContent);
    setTimeout(()=>{
        display.textContent = "";
    },10000)
}