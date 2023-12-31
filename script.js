/* Timer */

const formatTimer = document.querySelectorAll('.formatTimerm, #dayy');
const bye = document.getElementById('bye')
const dayy = document.getElementById('dayy')
const hourss = document.getElementById('hourss')
const minsss = document.getElementById('minsss')
const secsss = document.getElementById('secsss')
const realTime = document.querySelector('.realTime')
const container = document.querySelector('.container')
const note = document.querySelector('.note')
const noteee = document.querySelector('.noteee')

const weekdays = ['Sunday'];
const yearDay = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

let newTime = new Date();
const newMnth = yearDay[newTime.getMonth()];
const newDte = newTime.getDate();
const newYr = newTime.getFullYear()
const newDay = weekdays[newTime.getDay()];
const newHour = newTime.getHours();
const newMin = newTime.getMinutes();
const newSec = newTime.getSeconds();
console.log(newYr)

bye.textContent = `The year 2023 ends on ${newDay}, ${newDte},  ${newMnth}, ${newYr}, 12:00:00`

let futureTime = new Date(2024, 0, 1, 12, 0, 0);

const futureDate = futureTime.getTime();
function getTimeTomorrow() {
    const dday = new Date().getTime();
    const t = futureTime - dday;

    console.log(t)

    if(t <= 0){
        clearInterval(weHere)
        console.log(`New year`)
        realTime.innerHTML = `<h1 class='intro'> Happy new yearrrr!!!!!</>`
        bye.textContent = ` Happy new year☺ Share happiness`
        container.classList.add('newwww');
        note.classList.add('not');
        noteee.classList.add('not1');
    }
    
    const oneDay = 24 * 60 * 60 * 1000;
    const oneH = 60 * 60 * 1000;
    const oneM = 60 * 1000;

  
     
    let d = Math.floor(t / oneDay);
    let H = Math.floor((t % oneDay) / oneH)
    let M = Math.floor((t % oneH) / oneM)
    let S = Math.floor((t % oneM ) / 1000)

    d = d < 10 ? '0' + d:d;
    H = H < 10 ? '0' + H:H;
    M = M < 10 ? '0' + M:M;
    S = S < 10 ? '0' + S:S;

    dayy.innerHTML = `${d}`;
    hourss.innerHTML = `${H}`;
    minsss.innerHTML = `${M}`;
    secsss.innerHTML = `${S}`;


    

  
    console.log(H)

}

let weHere = setInterval(getTimeTomorrow, 1000)
getTimeTomorrow();