let min = 2;
let sec = '00';
let time = min*60;
const btn = document.querySelector('.start');
const resetbtn = document.querySelector('.reset');
let eventHandler;



function startTimer(){
    eventHandler = setInterval(timer,1000);
}

function resetTimer(){
    min = 2;
    sec = '00';
    time = min * 60;
    clearInterval(eventHandler);
}


function setup(){
    createCanvas(1200,600);
    angleMode(DEGREES);
    btn.addEventListener('click',startTimer);
    resetbtn.addEventListener('click',resetTimer);
     
}




function timer(){
    if (min == 0 && sec == 0){
        clearInterval(handle);
    }
    
    else if (sec == '00'){
        sec = 59;
        min--;
        time--;
        
    }
    else {
        sec--;
        time--;
        console.log(time);
        if(sec < 10){
            sec = '0' + sec;
            
        }
    }
    
}





function draw(){
    background(255);
    translate(200,200);
    rotate(-90);
    
    //Main CircularBar cornflowerblue
    stroke('cornflowerblue');
    strokeWeight(14);
    noFill();
    let mainBar = arc(0,0,300,300,0,360);  
    
    //loading CircularBar Grey
    stroke('#fcfcfc');
    strokeWeight(8);
    noFill();
    let end = map(time,120,0,360,0);
    let loadingBar = arc(0,0,300,300,0,end);

    //Text 
    noFill();
    rotate(90);
    stroke('cornflowerblue');
    strokeWeight(4);
    textSize(45);
    text('0'+ min+" : "+sec,-66,20);
    
}