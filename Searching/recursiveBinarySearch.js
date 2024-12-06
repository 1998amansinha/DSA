function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, left, right) {
  if (left > right) {
    return -1;
  }

  let mid = Math.floor((left + right) / 2);

  if (arr[mid] === target) {
    return mid;
  }
  if (arr[mid] > target) {
    return search(arr, target, left, mid - 1);
  } else {
    return search(arr, target, mid + 1, right);
  }
}

console.log(recursiveBinarySearch([-4, 2, 4, 6, 10], 6));

// Time Complexity - O(logn)
