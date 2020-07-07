setInterval(setClock,1000);
const hourTime = document.querySelector('.clock .hand.hour');
console.log(hourTime);
const minuteTime = document.querySelector('.clock .hand.minute');
const secondTime = document.querySelector('.clock .hand.second');

function setClock() {
    const date = new Date();
    const secondR = date.getSeconds() / 60 ;
    const minuteR = ( secondR + date.getMinutes()) / 60 ;
    const hourR = ( minuteR + date.getHours()) / 12 ;
    // console.log(secondR);
    // console.log(minuteR * 360);
    // console.log(hourR);

    hourTime.style.setProperty('--rotation', hourR * 360 );
    
    minuteTime.style.setProperty('--rotation', minuteR * 360 );
    
    secondTime.style.setProperty('--rotation', secondR * 360 );
}

setClock();