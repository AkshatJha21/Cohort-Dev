let time = new Date();
let hrs = time.getHours();
let min = time.getMinutes();
let sec = time.getSeconds();

function currentTime() {
    let time = new Date();
    let hrs = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let session = "";
    if (hrs > 11) {
        session = "PM"
    } else {
        session = "AM"
    }

    if (hrs == 0) {
        hrs = 12;
    }
    
    if (hrs > 12) {
        hrs = hrs - 12;
    }

    if (hrs < 10) {
        hrs = "0" + hrs;
    } 
    if (min < 10) {
        min = "0" + min;
    } 
    if (sec < 10) {
        sec = "0" + sec;
    } 

    let clock = hrs + ":" + min + ":" + sec + " " + session;
    setTimeout(function(){ 
        currentTime() 
    }, 1000);
    console.log(clock);
}

currentTime();
