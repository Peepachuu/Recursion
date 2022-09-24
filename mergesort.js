function mergeSort(arr, l, r) {
    if ((r - l) < 2)
        return;
    mergeSort(arr, l, Math.floor((r+l)/2));
    mergeSort(arr, Math.floor((r+l)/2), r);
    let p = 0;
    let left = l;
    let right = Math.floor((r+l)/2);
    let newArr = Array(r-l);
    while (left < Math.floor((r+l)/2) && right < r) {
        if (arr[left] < arr[right]) {
            newArr[p++] = arr[left++];
        } else {
            newArr[p++] = arr[right++];
        }
    }
    while (left < Math.floor((r+l)/2))
        newArr[p++] = arr[left++];
    while (right < r)
        newArr[p++] = arr[right++];
    arr.splice(l, r-l, ...newArr);
}

let arr = [38, 545, 888, 448, 565, 605, 104, 602];
mergeSort(arr, 0, arr.length);
console.log(arr);