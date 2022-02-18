let container=document.querySelector(".container");

let min=5;
let timerDuration=min*60;
let timer=document.getElementById("timer");


/*let btnStart=document.querySelector(".start");
btnStart.addEventListener("click",startTimer);*/



function startTimer(){
    
    let mins=Math.floor(timerDuration/60);
    let secs=timerDuration%60;
        
    secs= secs<10 ? '0'+ secs:secs;
    
    timer.innerHTML=`${mins}:${secs}`;
       
    timerDuration--;
    timerDuration = timerDuration < 0 ? 0 : timerDuration; 
   

    
}



setInterval(startTimer,1000);
