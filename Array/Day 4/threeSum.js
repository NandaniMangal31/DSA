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
    return merge(left, right);
}
function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
    let k = 0;
    while (i < left.length && j < right.length) {

        if (left[i] <= right[j]) {
            result[k] = left[i];
            i++;
        }
        else {
            result[k] = right[j];
            j++;
        }

        k++;
    }

    while (i < left.length) {
        result[k] = left[i];
        i++;
        k++;
    }

    while (j < right.length) {
        result[k] = right[j];
        j++;
        k++;
    }

    return result;
}

function threesum(arr) {
    arr = mergesort(arr);
    let result = [];
    let c = 0;
    for (let i = 0; i < arr.length - 2; i++) {

        if (i > 0 && arr[i] === arr[i - 1]) {
            continue;
        }
        let left = i + 1;
        let right = arr.length - 1;
        while (left < right) {
            let sum = arr[i] + arr[left] + arr[right];
            if (sum === 0) {
                result[c] = [arr[i], arr[left], arr[right]];
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
            else if (sum < 0) {
                left++;
            }
            else {
                right--;
            }
        }
    }
    return result;
}
let arr = [-1, 0, 1, 2, -1, -4];
console.log(threesum(arr));