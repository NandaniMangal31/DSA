function largestelement(arr) {
    let l = arr[0];
    for (let i = 1; i < arr.length; i++) {

        if (arr[i] > l) {
            l = arr[i];
        }
    }
    return l;
}
let arr = [10, 5, 20, 8, 15];
console.log(largestelement(arr));