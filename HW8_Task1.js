var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myBlend(arr) {
    for (let i in arr) {
        let randIndx = Math.floor(Math.random() * arr.length);
        let tmpVal = arr[i];
        arr[i] = arr[randIndx];
        arr[randIndx] = tmpVal;
    }
    return arr;
}
console.log (myBlend(arr));