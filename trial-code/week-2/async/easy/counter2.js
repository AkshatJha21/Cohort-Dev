function counter(i) {
    console.log(i);
    i++;
    setTimeout(function() {
        counter(i);
    }, 1000);
}

let i = 0;
counter(i);