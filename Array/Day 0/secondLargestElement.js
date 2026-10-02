function secondlargestelement(arr) {
    let l = -Infinity;
    let secl = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > l) {
            secl = l;
            l = arr[i];
        }
        else if (arr[i] > secl && arr[i] !== l) {
            secl = arr[i];
        }
    }
    return secl;
}
let arr = [10, 5, 20, 8, 15];
console.log(secondlargestelement(arr));