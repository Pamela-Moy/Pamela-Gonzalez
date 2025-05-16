let num1Input= document.querySelector("#num1");
let num2Input= document.querySelector("#num2");

let plusButton = document.querySelector("#plus");
let minusButton = document.querySelector("#minus");
let multButton = document.querySelector("#mult");
let divButton = document.querySelector("#div");

let resultDiv = document.querySelector("#Result");

function addition(x,y){
    console.log(x + y); 
    return x + y;
}

plusButton.addEventListener("click", function(){
    //console.log(num1.value);
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    //addition(num1, num2);
    resultDiv.textContent = addition(num1, num2);
});


function min(x,y){
    console.log(x - y); 
    return x - y;
}

minusButton.addEventListener("click", function(){
    //console.log(num1.value);
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    //addition(num1, num2);
    resultDiv.textContent = min(num1, num2);
});

function mult(x,y){
    console.log(x * y); 
    return x * y;
}

multButton.addEventListener("click", function(){
    //console.log(num1.value);
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    //addition(num1, num2);
    resultDiv.textContent = mult(num1, num2);
});

function divi(x,y){
    console.log(x / y); 
    return x / y;
}

divButton.addEventListener("click", function(){
    //console.log(num1.value);
    let num1 = parseFloat(num1Input.value);
    let num2 = parseFloat(num2Input.value);
    //addition(num1, num2);
    resultDiv.textContent = divi(num1, num2);
});







