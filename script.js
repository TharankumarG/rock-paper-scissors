var result="";
var val="";
var computerpick="";
var computercount=0;
var playercount=0;
const blockcontainer=document.getElementById("block-container");
const resultpopup=document.getElementById("resultpopup");
function play(image){
    const computer=["Rock","Paper","Scissors"];
    let randomnumber=Math.floor(Math.random()*3);
    val = image.getAttribute("value");
    computerpick=computer[randomnumber];
    if(val==="Rock"&&computerpick==="Paper"){
        result="The Winner is Computer! ";
        computercount++;
       }
    else if(val==="Rock"&&computerpick==="Scissors"){
        result="The Winner is You!";
        playercount++;
       }
    else if(val==computerpick){
        result="The Game is Tied!";
       }
    else if(val==="Paper"&&computerpick==="Rock"){
        result="The Winner is You!";
        playercount++;
       }
    else if(val==="Paper"&&computerpick==="Scissors"){
        result="The Winner is Computer!";
        computercount++;
       }
    else if(val==="Scissors"&&computerpick==="Rock"){
        result="The Winner is Computer!";
        computercount++;
       }
    else if(val=="Scissors"&&computerpick==="Paper"){
        result="The Winner is You!";
        playercount++;
       }
       
    var div=document.createElement("div");
    div.innerHTML+=`
       <div id="res-div">
       <center>
       <h1 class="result-text">You Pick : <span class="result-span">${val}</span></h1>
       <h1 class="result-text">Computer Pick : <span class="result-span">${computerpick}</span></h1>
       <h1 id="result-display">${result}</h1>
       <P id="result-para">Playerwins : ${playercount} Computerwins : ${computercount}</p>
       <button id="playagain-btn" onclick="playagain()">Play Again</button>
       </center>
       </div>
     `;
       
    resultpopup.style.display="block";
    blockcontainer.style.display="none";
    resultpopup.appendChild(div);
}
function playagain(){
    resultpopup.style.display="none";
    resultpopup.innerHTML = "";
    blockcontainer.style.display="block";
}
    