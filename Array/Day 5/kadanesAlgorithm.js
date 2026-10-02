function maxsubarraysum(arr) {
    let c = arr[0];
    let m = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (c + arr[i] > arr[i]) {
            c = c + arr[i];
        }
        else {
            c = arr[i];
        }
        if (c > m) {
            m = c;
        }
    }
    return m;
}
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxsubarraysum(arr));