function mergesort(arr) {
    if (arr.length <= 1) {
        return arr;
    }
    let mid = Math.floor(arr.length / 2);
    let left = [];
    let right = [];
    let l = 0;
    let r = 0;
    for (let i = 0; i < mid; i++) {
        left[l] = arr[i];
        l++;
    }
    for (let i = mid; i < arr.length; i++) {
        right[r] = arr[i];
        r++;
    }
    left = mergesort(left);
    right = mergesort(right);
    let result = [];
    let i = 0;
    let j = 0;
    let n = 0;
    while (i < left.length && j < right.length) {
        if (left[i] <= right[j]) {
            result[n] = left[i];
            i++;
        }
        else {
            result[n] = right[j];
            j++;
        }
        n++;
    }
    while (i < left.length) {
        result[n] = left[i];
        i++; n++;
    }
    while (j < right.length) {
        result[n] = right[j];
        j++; n++;
    }
    return result;
}
function fsum(arr, target) {
    arr = mergesort(arr);
    let result = [];
    let c = 0;
    for (let i = 0; i < arr.length - 3; i++) {
        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        for (let j = i + 1; j < arr.length - 2; j++) {
            if (j > i + 1 && arr[j] === arr[j - 1]) {
                continue;
            }
            let left = j + 1;
            let right = arr.length - 1;
            while (left < right) {
                let sum = arr[i] + arr[j] + arr[left] + arr[right];
                if (sum === target) {
                    result[c] = [
                        arr[i],
                        arr[j],
                        arr[left],
                        arr[right]
                    ];
                    c++;
                    let lval = arr[left];
                    let rval = arr[right];
                    while (left < right && arr[left] === lval) {
                        left++;
                    }
                    while (left < right && arr[right] === rval) {
                        right--;
                    }
                }
                else if (sum < target) {
                    left++;
                }
                else {
                    right--;
                }
            }
        }
    }
    return result;
}
let arr = [1, 0, -1, 0, -2, 2];
console.log(fsum(arr, 0));