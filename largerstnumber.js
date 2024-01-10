let arr = [10, 4, 5, 65, 12, 6, 8, 9, 1, 2, 3, 7];
let temp = 0;
// Fixing the sorting algorithm
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) { // Fixed the condition from j < i to j < arr.length
        //arr[0]=10, arr[1]=4==> Swap 2 numbers
        //arr[1]=10, arr[2]=5==> Swap 2 numbers
        if (arr[i] < arr[j]) {
            temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
}

// Fixing the loop to display the sorted array
console.log("Ascending order will be: ")
for (let v = 0; v < arr.length; v++) { // Changed v <= arr.length to v < arr.length
    console.log(arr[v]); // Used arr[v] to access elements in the array
}
