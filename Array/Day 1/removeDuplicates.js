function removeduplicates(arr) {
    let seen = {};
    let result = [];
    let i = 0;
    for (let i = 0; i < arr.length; i++) {
        if (seen[arr[i]] === undefined) {
            seen[arr[i]] = true;

            result[i] = arr[i];
            i++;
        }
    }
    return result;
}
let arr = [4, 2, 1, 2, 4, 5, 1];
console.log(removeduplicates(arr));