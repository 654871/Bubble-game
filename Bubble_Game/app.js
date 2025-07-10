function makeBubble(){
    let clutter=" ";
for(let i=1;i<=119;i++){
    let rn=Math.floor(Math.random()*10);
    clutter+=`<div class="bubble">${rn}</div>`;
}

document.querySelector("#pbtm").innerHTML=clutter;
}
let hitrn=0;
let t=60;
let score=0;
function runtime(){
   let timer=setInterval(()=>{
    if(t>0){
        t--;
        document.querySelector("#timer").textContent=t;
    }
    else{
        clearInterval(timer);
        document.querySelector("#pbtm").innerHTML=`<h1>Game Over!</h1>  <h1>Your score is ${score}</h1>`;
        
    }
    },1000)
}
function getNewHit(){
    hitrn=Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent=hitrn;
}

function increaseScore(){
    score+=10;
    document.querySelector("#scoreVal").textContent=score;
}
document.querySelector("#pbtm").addEventListener("click",(details)=>{
  let checkedNumber=Number(details.target.textContent);
  if(checkedNumber===hitrn){
    increaseScore();
    makeBubble();
    getNewHit();
  }
})
getNewHit();
runtime();
makeBubble();

