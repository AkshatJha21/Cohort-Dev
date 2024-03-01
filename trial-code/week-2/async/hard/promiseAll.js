function wait1(t) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, t*1000);
    });
    return p;
}

function wait2(t) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, t*1000);
    });
    return p;
}

function wait3(t) {
    let p = new Promise(function (resolve) {
        setTimeout(resolve, t*1000);
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();
    let p = Promise.all([wait1(t1), wait2(t2), wait3(t3)]);
    p.then(function() {
        console.log(Date.now() - start)
    })
}

calculateTime(0, 0, 0);