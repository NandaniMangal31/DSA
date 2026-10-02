function twosum(arr, tar) {
    let seen = {};
    for (let i = 0; i < arr.length; i++) {
        let req = tar - arr[i];
        if (seen[req] !== undefined) {
            return [seen[req], i];
        }
        seen[arr[i]] = i;
    }
    return [-1, -1];
}
let arr = [2, 6, 5, 8, 11];
console.log(twosum(arr, 14));