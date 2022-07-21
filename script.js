// setting time interval to 1 millisecond
setInterval(() => {
    let date = new Date();
    let tHour= date.getHours();
    let tMin = date.getMinutes();
    let tSec = date.getSeconds();

    // logic for hour-hand rotation
    let hRotate = 30*tHour + tMin/2;
    // logic for minute-hand rotation
    let mRotate = 6*tMin;
    // logic for second-hand rotation
    let sRotate = 6*tSec;
// styling the clock hands accordingly
    hours.style.transform = `rotate(${hRotate}deg)`;
    minutes.style.transform = `rotate(${mRotate}deg)`;
    seconds.style.transform = `rotate(${sRotate}deg)`;
}, 1000);
