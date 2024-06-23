const minl = document.getElementById('minutes');
const secl = document.getElementById('seconds');
const milisecl = document.getElementById('miliseconds');


const startbutton = document.getElementById('startbtn');
const stopbutton = document.getElementById('stopbtn');
const pausebutton = document.getElementById('pausebtn');
const resetbutton = document.getElementById('resbtn');

const laplist = document.getElementById('laplist');


let minutes =0;
let seconds= 0;
let miliseconds = 0;
let interval;

startbutton.addEventListener('click',startTimer);
stopbutton.addEventListener('click',StopTimer);
pausebutton.addEventListener('click',PauseTimer);
resetbutton.addEventListener('click',resetTimer);

function startTimer(){

    interval = setInterval(updateTimer,10);
    startbutton.disabled = true;

}
function StopTimer(){
    clearInterval(interval);
    addToLapList()   
    resetTimerData();
    startbutton.disabled = false;
}
function PauseTimer(){
    clearInterval(interval);
    startbutton.disabled =false;
}
function resetTimer(){

    clearInterval(interval);
    resetTimerData();
    startbutton.disabled =false;

}
function updateTimer(){
    miliseconds++;
    if(miliseconds === 100){
        miliseconds=0;
        seconds++;
        if(seconds === 60){
            seconds=0;
            minutes++;
        }
    }
    displayTimer();
}

function displayTimer(){
    milisecl.textContent = padTime(miliseconds);
    secl.textContent = padTime(seconds);
    minl.textContent = padTime(minutes);
}

function padTime(time){
    return time.toString().padStart(2,'0');
}
function resetTimerData(){
    minutes=0;
    seconds=0;
    miliseconds =0;
    displayTimer();
}

function addToLapList(){
    const lapTime = `${minutes}:${padTime(seconds)}:${padTime(miliseconds)}`;

    const listItem = document.createElement('li');
    listItem.innerHTML = `<span>Lap ${laplist.childElementCount +1}: </span> ${lapTime}`;
    laplist.appendChild(listItem);

}