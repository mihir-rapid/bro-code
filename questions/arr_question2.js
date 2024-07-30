function getSumOfTwo(arr) {
    arr.sort((a, b) => a - b);
    return arr[0] + arr[1];
}

let numbers = [65, 78, 97, 16, 20, 10];

console.log(getSumOfTwo(numbers));
