let submit= document.querySelector("input[type=submit");
let fname= document.querySelector("input[name=fname]");
let lname = document.querySelector('input[name=lname]')
let email= document.querySelector("input{name=email]");
let Happy= document.querySelector("input{name=Happy-Birthday]");
let age= document.querySelector("input{name=age]");
let Nationality= document.querySelector("input{name=Nationality]");
let gender= document.querySelector("input{name=gender]");
let fcolor= document.querySelector("input{name=fcolor]");
let password= document.querySelector("input{name=password]");


submit.addEventListener("click", printInfo)
function printInfo(){
    console.log(fname.value + ' ' + lname)
    console.log(email.value)
    console.log(Happy.value)
    console.log(age.value)
    console.log(Nationality.value)
    console.log(gender.value)
    console.log(fcolor.value)
    console.log(password.value)
}