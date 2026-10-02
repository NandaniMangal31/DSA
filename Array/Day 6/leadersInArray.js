function leaders(arr) {
    let result = [];
    let c = 0;
    let mright = arr[arr.length - 1];
    result[c] = mright;
    c++;
    for (let i = arr.length - 2; i >= 0; i--) {
        if (arr[i] > mright) {
            mright = arr[i];
            result[c] = arr[i];
            c++;
        }
    }
    let left = 0;
    let right = c - 1;
    while (left < right) {
        let temp = result[left];
        result[left] = result[right];
        result[right] = temp;
        left++;
        right--;
    }
    return result;
}
let arr = [10, 22, 12, 3, 0, 6];
console.log(leaders(arr));