// function bubbleSort(arr) {
//   let swap;
//   do {
//     swap = false;
//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] > arr[i + 1]) {
//         let temp = arr[i];
//         arr[i] = arr[i + 1];
//         arr[i + 1] = temp;
//         swap = true;
//       }
//     }
//   } while (swap);
//   return arr;
// }

function bubbleSort(arr) {
  let swap = true;
  while (swap) {
    swap = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swap = true;
      }
    }
  }
  return arr;
}

console.log(bubbleSort([-6, 20, 8, -2, 4]));

// Time Complexity = O(n^2)
