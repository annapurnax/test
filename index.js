
var css=document.querySelector("h3");
var color1=document.querySelector(".colo1");
var color2=document.querySelector(".colo2");
var body=document.getElementById("gradient");
color1.addEventListener("input",function(){
body.style.background="linear-gradient(to right,"+color1.value+","+ color2.value +")";
css.textContent=body.style.background+";";} );
color2.addEventListener("input",function(){
    body.style.background="linear-gradient(to right,"+color1.value+","+color2.value+")";
    css.textContent=body.style.background+";"; } );
    
    
    
    var tap =document.getElementsByTagName("button");
    var input =document.getElementById("userinput");
    var ul=document.querySelector("ul");
    tap.addEventListener("onclick",function(){
        alert(input.value);
        var li=document.createElement("li");
        li.appendChild(document.createTextNode(input.value));
        ul.appendChild(li);
        input.value=" ";});ok