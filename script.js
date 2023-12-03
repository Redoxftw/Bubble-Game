function makeBubble() {
    let clutter = "";
    for (let i = 1; i <= 1000; i++) {
        clutter += `<div class="bubble">${Math.floor(Math.random() * 10)}</div>`
    }

    document.getElementById("panel-bottom").innerHTML = clutter;
}

let timer=60;
function runTimer(){
    let timer_function=setInterval(() => {
        if(timer>0){
            timer--;
            document.getElementById("timer-val").textContent=timer;
        }
        else{
            clearInterval(timer_function);
            document.getElementById("panel-bottom").innerHTML=`<h1>Game Over Score : ${score_val}</h1>`;
            document.querySelector("<h1>").style="red";
            
        }
    }, 1000);
}
let hitval;
function hit(){
    hitval=Math.floor(Math.random() * 10);
    document.getElementById("hit-val").textContent=hitval;
}
let score_val=0;
function increase_score(){
    score_val+=10;
    document.getElementById("score-val").textContent=score_val;
}
function decrease_score(){
    score_val-=5;
    document.getElementById("score-val").textContent=score_val;
}

document.getElementById("panel-bottom").addEventListener("click",function(details){
    let choice=details.target.textContent;
    if(choice==hitval){
        increase_score();
        hit();
        makeBubble();
    }
    else{
        decrease_score();
        hit();
        makeBubble();
    }
})
makeBubble();
runTimer();
hit();

