function reverse(arr, s, e) {
    while (s < e) {
        let temp = arr[s];
        arr[s] = arr[e];
        arr[e] = temp;
        s++; e--;
    }
}
function leftrotate(arr, k) {
    let n = arr.length;
    if (n === 0) {
        return arr;
    }
    k = k % n;
    reverse(arr, 0, k - 1);
    reverse(arr, k, n - 1);
    reverse(arr, 0, n - 1);
    return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(leftrotate(arr, 2));