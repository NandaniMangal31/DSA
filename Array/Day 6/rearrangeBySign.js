function rearrangebysign(arr) {
    let result = [];
    let pindex = 0;
    let nindex = 1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            result[pindex] = arr[i];
            pindex = pindex + 2;
        }
        else {
            result[nindex] = arr[i];
            nindex = nindex + 2;
        }
    }
    return result;
}
let arr = [3, 1, -2, -5, 2, -4];
console.log(rearrangebysign(arr));