function maximumconsecutive(arr) {
    let c = 0;
    let maxc = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 1) {
            c++;
            if (c > maxc) {
                maxc = c;
            }
        }
        else {
            c = 0;
        }
    }
    return maxc;
}
let arr = [1, 1, 0, 1, 1, 1];
console.log(maximumconsecutive(arr));