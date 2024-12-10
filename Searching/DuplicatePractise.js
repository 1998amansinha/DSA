// function searchingDuplicates(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i + 1; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         return arr[i];
//       }
//     }
//   }
//   return -1;
// }
// Time Complexity - O(n2)
// Two Pointer Approaach

// Improved Approach
function searchingDuplicates(arr) {
  arr.sort();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i + 1]) {
      return arr[i];
    }
  }
  return -1;
}

// Time Complexity - O(nlogn)
// Sliding Window

function searchingDuplicates(arr) {
  let hash = {};
  for (let num of arr) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }
  for (let num in hash) {
    if (hash[num] > 1) {
      return Number(num);
    }
  }
  return -1;
}
console.log(searchingDuplicates([-2, 4, 6, 8, 10, 6]));
