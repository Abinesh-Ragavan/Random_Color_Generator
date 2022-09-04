const containerEl =document.querySelector(".container");


for(let int =0;int<30;int++){
    const colorcontainerEl =document.createElement("div");
    colorcontainerEl.classList.add("color-container");
    containerEl.appendChild(colorcontainerEl);
}

const colorcontainerElS =document.querySelectorAll(".color-container");
generatecolor();
function generatecolor(){
    colorcontainerElS.forEach((colorcontainerEl)=>{
        const newcolorcode =randomcolor();
        colorcontainerEl.style.backgroundColor ='#' + newcolorcode;
        colorcontainerEl.innerText = "#"+newcolorcode;

    })



}

function randomcolor(){
    const chars ="0123456789abcdef";
    const colorcodelength =6;
  let colorcode=""
    for (let index = 0; index < colorcodelength; index++) {
        const randomnum =Math.floor(Math.random()*chars.length);
          colorcode+=chars.substring(randomnum,randomnum+1);
          }
    return colorcode;
}