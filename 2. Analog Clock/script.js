function changeTime(){
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    
    const secondsDegree = ((seconds/60)*360) + 90;
    const minutesDegree = ((minutes/60)*360) + 90;
    const hoursDegree = 0.5 * (hours * 60 + minutes) + 90;

    document.querySelector('.second-hand').style.transform = `rotate(${secondsDegree}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minutesDegree}deg)`;
    document.querySelector('.hour-hand').style.transform = `rotate(${hoursDegree}deg)`;

}

setInterval(changeTime, 1000);