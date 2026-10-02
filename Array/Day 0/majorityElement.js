function majorityelement(arr) {
    let can = 0;
    let c = 0;
    for (let i = 0; i < arr.length; i++) {
        if (c === 0) {
            can = arr[i];
            c = 1;
        }
        else if (arr[i] === can) {
            c++;
        }
        else {
            c--;
        }
    }
    let feq = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === can) {
            feq++;
        }
    }
    if (feq > arr.length / 2) {
        return can;
    }
    return -1;
}
let arr = [2, 2, 1, 1, 1, 2, 2];
console.log(majorityelement(arr));