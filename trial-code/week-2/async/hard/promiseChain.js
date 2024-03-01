function wait1(t) {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, t*1000);
    });
    return p;
}

function wait2(t) {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, t*1000);
    });
    return p;
}

function wait3(t) {
    let p = new Promise(function(resolve) {
        setTimeout(resolve, t*1000);
    });
    return p;
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();

    // this is a promise chain :-
    wait1(t1).then(function() {
        wait2(t2).then(function() {
            wait3(t3).then(function() {
                console.log(Date.now() - start);
            });
        });
    });
}

calculateTime(0, 0, 0);