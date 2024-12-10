function quickSort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let pivot = arr[arr.length - 1];
  let leftArr = [];
  let rightArr = [];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pivot) {
      leftArr.push(arr[i]);
    } else {
      rightArr.push(arr[i]);
    }
  }
  return [...quickSort(leftArr), pivot, ...quickSort(rightArr)];
}

console.log(quickSort([-6, 20, 8, -2, 4]));

// Time Complexity = O(n^2) Because if the array is already sorted then we end up cretaing an sorted array and an empty array.
