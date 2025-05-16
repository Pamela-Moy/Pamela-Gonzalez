

let resultDiv = document.querySelector("#Result");

function flip(x, y){
    let coin= Math.random();
    if (coin <=0.5){
        return 'Victory '+ x;
    } else {
        return "Lose " + y;
    }
}
function flip2(x, y){
    let coin= Math.random();
    if (coin <=0.5){
        return 'Victory '+ y;
    } else {
        return "Lose " + x;
    }
}
Sello.addEventListener("click", function(){
    flip('🪙','🦅')
    resultDiv.textContent = flip('🪙','🦅');
});

Aguila.addEventListener("click", function(){
    flip2('🪙','🦅')
    resultDiv.textContent = flip2('🪙','🦅');
});