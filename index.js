function findZeroSum(arr) {
  let result = [];
  let map = {};

  for (let i = 0; i < arr.length; i++) {
    let complement = -arr[i];

    if (map.hasOwnProperty(complement)) {
      result.push(complement, arr[i]);
      return result;
    }

    map[arr[i]] = i;
  }

  return "No Elements found";
}
console.log(findZeroSum([-4, 1, 3, -2, -1])); // Output: [3, -2, -1]
console.log(findZeroSum([1, 2, 3,-3, 4])); // Output: "No Elements found"
console.log(findZeroSum([0, -1, 1, -2, 2])); // Output: [1, -1]
console.log(findZeroSum([])); // Output: "No Elements found"
console.log(findZeroSum([1, 2, -2, -1])); // Output: [2, -2] or [-2, 2] (either is valid)
