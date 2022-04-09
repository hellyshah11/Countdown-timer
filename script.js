const daysEle=document.querySelector("#days");
const hoursEle=document.querySelector("#hours");
const minsEle=document.querySelector("#mins");
const secondsEle=document.querySelector("#seconds");

const newYears="1 Jan 2023";

function countdown(){
    const newYearsDate= new Date(newYears);
    const currentDate= new Date();

    const totalSeconds=(newYearsDate-currentDate)/1000;
  
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const mins=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds)%60;
   
    daysEle.innerHTML=days;
    hoursEle.innerHTML=formatTime(hours);
    minsEle.innerHTML=formatTime(mins);
    secondsEle.innerHTML=formatTime(seconds);
}
countdown();

function formatTime(time){
    return time<10?`0${time}`:time;
}
setInterval(countdown,1000);