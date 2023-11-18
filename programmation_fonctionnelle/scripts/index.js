const h = document.getElementById('hours');
const m = document.getElementById('minutes');
const s = document.getElementById('seconds');
let id;
let initTime = { h: 11, m: 59, s: 52 };

function showTime(time) {
    h.innerHTML = time.h < 10 ? "0" + time.h : time.h;
    m.innerHTML = time.m < 10 ? "0" + time.m : time.m;
    s.innerHTML = time.s < 10 ? "0" + time.s : time.s;
}

function increment(time) {
    let myTime = {...time};
    return function () {
        myTime.s++;
        if (myTime.s === 60) {
            myTime.s = 0;
            myTime.m++;
            if (myTime.m === 60) {
                myTime.m = 0;
                myTime.h++;
                if (myTime.h === 12) myTime.h = 0;
            }
        }
        showTime(myTime);
    };
}



function stop() {
    clearInterval(id);
}

function start() {

    id = setInterval(incrementTime, 1000); 
}

const incrementTime = increment(initTime);
incrementTime();
start(); 
