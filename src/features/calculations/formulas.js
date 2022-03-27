export const calculateMean = array =>
  (array.reduce((a, b) => a + b) / array.length).toFixed(6);

export const calculateMedian = array => {
  const mid = Math.floor(array.length / 2),
    nums = [...array].sort((a, b) => a - b);
  return (array.length % 2 !== 0
    ? nums[mid]
    : (nums[mid - 1] + nums[mid]) / 2
  ).toFixed(6);
};

export const calculateStdDev = array => {
  let m = calculateMean(array);
  return Math.sqrt(
    array.reduce(function (sq, n) {
      return sq + Math.pow(n - m, 2);
    }, 0) /
      (array.length - 1)
  ).toFixed(6);
};

export const calculateMode = array => {
  let m = array.reduce(
    function (current, num) {
      const freq =
        num in current.numMap
          ? ++current.numMap[num]
          : (current.numMap[num] = 1);
      if (freq > current.modeFreq && freq > 1) {
        current.modeFreq = freq;
        current.mode = num;
      }
      return current;
    },
    { mode: null, modeFreq: 0, numMap: {} }
  ).mode;
  if (m) {
    return m.toFixed(6);
  }
  return "No Mode";
};
