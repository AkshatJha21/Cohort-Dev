// 24 HOUR FORMAT

function machineTime() {
    let now = new Date();
    let hrs = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    if (hrs < 10){
        hrs = "0" + hrs;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (sec < 10){
        sec = "0" + sec;
    }
    
    let time = hrs + ":" + min + ":" + sec;
    setTimeout(machineTime, 1000);
    console.log(time);
}

machineTime();