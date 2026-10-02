function maxsubarray(arr) {
    let csum = arr[0];
    let msum = arr[0];
    let s = 0;
    let e = 0;
    let temps = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > csum + arr[i]) {
            csum = arr[i];
            temps = i;
        }
        else {
            csum = csum + arr[i];
        }
        if (csum > msum) {
            msum = csum;
            s = temps;
            e = i;
        }
    }
    let result = [];
    let k = 0;

    for (let i = s; i <= e; i++) {
        result[k] = arr[i];
        k++;
    }
    console.log("Maximum Sum:", msum);
    console.log("Subarray:", result);
}
let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
maxsubarray(arr);