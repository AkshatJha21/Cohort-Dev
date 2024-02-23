function findLargestElement(numbers) {
    let max_num = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (max_num < numbers[i]) {
            max_num = numbers[i];
        } 
    }

    return max_num;
}

let arr = [];

console.log(findLargestElement(arr));