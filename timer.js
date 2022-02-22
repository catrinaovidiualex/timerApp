let container=document.querySelector(".container");

let min=5;
let timerDuration=min*60;
let timer=document.getElementById("timer");


let t;


let btnStart=document.querySelector(".start");
btnStart.addEventListener("click",()=>{

    t=setInterval(startTimer,1000);
});


let btnReset=document.querySelector(".reset");
btnReset.addEventListener("click",resetTimer);


let btnStop=document.querySelector(".stop");
btnStop.addEventListener("click", stopTimer);

let btnEdit=document.getElementById('timer');
btnEdit.addEventListener("dblclick",editTimer);




function startTimer(){
   
    
    let mins=Math.floor(timerDuration/60);
    let secs=timerDuration%60;
        
    secs= secs<10 ? '0'+ secs:secs;
    
    timer.innerHTML=`${mins}:${secs}`;
       
    timerDuration--;
    timerDuration = timerDuration < 0 ? 0 : timerDuration; 

  
    
}


function resetTimer(){
 location.reload();
}

function stopTimer(){

    clearInterval(t);
}

function editTimer(){

let paragraf=document.getElementById('timer');
paragraf.contentEditable="true";
window.alert("Daca doriti sa editati timer-ul  trebuie sa introduceti valorile lui in formatul mm:ss");

if(timerFormat(paragraf)&&stopTimer()){
    
    min=extractMins(paragraf);
    timerDuration=min*60;


    startTimer();

}

}


function timerFormat(text){
    const regex = /\d\d:\d\d/g;

    return match(regex);
}

function extractMins(text){
    if(text){
       
        let minute=text.substring(0,2);
        console.log(minute);
    }

}



