function union(arr1, arr2) {
    let i = 0;
    let j = 0;
    let result = [];
    let k = 0;
    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            if (k === 0 || result[k - 1] !== arr1[i]) {
                result[k] = arr1[i];
                k++;
            }
            i++;
        }
        else if (arr2[j] < arr1[i]) {
            if (k === 0 || result[k - 1] !== arr2[j]) {
                result[k] = arr2[j];
                k++;
            }
            j++;
        }
        else {
            if (k === 0 || result[k - 1] !== arr1[i]) {
                result[k] = arr1[i];
                k++;
            }
            i++; j++;
        }
    }
    while (i < arr1.length) {
        if (k === 0 || result[k - 1] !== arr1[i]) {
            result[k] = arr1[i];
            k++;
        }
        i++;
    }
    while (j < arr2.length) {
        if (k === 0 || result[k - 1] !== arr2[j]) {
            result[k] = arr2[j];
            k++;
        }
        j++;
    }
    return result;
}
let arr1 = [1, 2, 2, 3, 4];
let arr2 = [2, 3, 5, 6];
console.log(union(arr1, arr2));