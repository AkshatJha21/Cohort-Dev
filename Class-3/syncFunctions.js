function findSum(n) {
    let ans = 0;
    for (let i = 1; i <= n; i++) {
        ans += i;
    }
    return ans;
}

function sumTill100() {
    console.log(findSum(100));
}

function syncSleep() {
    let a = 1;
    for (let i = 0; i < 1000000000; i++) {
        a += 1;
    }
}

syncSleep();
sumTill100();
// setTimeout(sumTill100, 3000);

console.log("hello world");