
function returnSumOfMin(arr) {
    arr.sort((a, b) => a-b);
    return arr[0] + arr[1];
}

const arr = [2, 7, 3, 10, 45, 76];
const result = returnSumOfMin(arr);
console.log(result);
