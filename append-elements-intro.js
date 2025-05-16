function makeElements(){
    let container= document.querySelector("#container");

    let para=document.createElement("p");
    para.style.cssText= "color:orange";
    para.textContent="Hey I'm Orange.";
    container.appendChild(para);

    let blue=document.createElement("h3");
    blue.style.cssText="Color:blue";
    blue.textContent="I'm a blue h3!";
    container.appendChild(blue);

    let didi=document.createElement("div");
    didi.style.cssText= "border= 2px; black solid, background=color:pink";
    container.appendChild(didi);
    let header=document.createElement("h1");
    header.style.cssText="Color: black"
    header.textContent= "I’m in a div!";
    didi.textContent.appendChild(header)
}