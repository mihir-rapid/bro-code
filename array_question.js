
let arr = [10, 20, 45, 17, 18, 90, 12, 8];

function returnSumOfMin(arr) {
    arr.sort((a, b) => a-b);
    return arr[0] + arr[1]
}

console.log(returnSumOfMin(arr));
