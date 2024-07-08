function updateClock(){

    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();

    hours = hours <10 ? "0" + hours : hours ;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds <10 ? "0" + seconds : seconds;

    const hoursEle = document.getElementById("hours");
    const minEle = document.getElementById("minutes");
    const secEle = document.getElementById("seconds");

    hoursEle.textContent = hours;
    minEle.textContent = minutes;
    secEle.textContent = seconds;




}
setInterval(updateClock,1000);