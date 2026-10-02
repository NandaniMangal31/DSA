function sort012(arr) {
    let low = 0;
    let mid = 0;
    let high = arr.length - 1;
    while (mid <= high) {
        if (arr[mid] === 0) {
            let temp = arr[low];
            arr[low] = arr[mid];
            arr[mid] = temp;
            low++; mid++;
        }
        else if (arr[mid] === 1) {
            mid++;
        }
        else {
            let temp = arr[mid];
            arr[mid] = arr[high];
            arr[high] = temp;
            high--;
        }
    }
    return arr;
}
let arr = [2, 0, 2, 1, 1, 0];
console.log(sort012(arr));