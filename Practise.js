var canConstruct = function (ransomNote, magazine) {
  let hash = {};
  for (let m of magazine) {
    if (hash[m]) {
      hash[m]++;
    } else {
      hash[m] = 1;
    }
  }

  console.log(hash);

  for (let h of ransomNote) {
    if (hash[h] > 0) {
      hash[h]--;
    } else {
      return false;
    }
  }

  return true;
};

console.log(canConstruct("aa", "aab"));
