// function maxNumberDuplicate(arr) {
//   let max = 0;
//   for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     for (let j = 0; j < arr.length; j++) {
//       if (arr[i] === arr[j]) {
//         count++;
//       }
//     }
//     if (count > max) {
//       max = arr[i];
//     }
//     console.log(count);
//   }
//   return max;
// }

// Time Complexity - O(n2)

// function maxNumberDuplicate(arr) {
//   arr.sort();
//   console.log(arr);

//   let maxFreq = 0;
//   let currFreq = 1;
//   let maxNumber = arr[0];
//   for (let i = 1; i < arr.length; i++) {
//     if (arr[i] === arr[i - 1]) {
//       currFreq++;
//     } else {
//       if (currFreq > maxFreq) {
//         maxFreq = currFreq;
//         maxNumber = arr[i - 1];
//       }
//       currFreq = 1;
//     }
//   }
//   if (currFreq > maxFreq) {
//     maxFreq = currFreq;
//     maxNumber = arr[arr.length - 1];
//   }
//   return maxNumber;
// }

// Time complexity - O(nlogn)

function maxNumberDuplicate(arr) {
  let hash = {};
  let max = null;
  let maxfrq = 0;
  for (let num of arr) {
    if (hash[num]) {
      hash[num]++;
    } else {
      hash[num] = 1;
    }
  }

  for (let num in hash) {
    if (hash[num] > maxfrq) {
      maxfrq = hash[num];
      max = Number(num);
    }
  }
  return max;
}

console.log(maxNumberDuplicate([3, 4, 2, 3, 6, 4, 3, 2, 3, 2, 2, 2]));
