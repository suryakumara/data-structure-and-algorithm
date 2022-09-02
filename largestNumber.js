const largest = (prev, curr) => {
  return curr > prev ? curr : prev;
};

function largestOfFour(array) {
  const result = array.map((arr) =>
    arr.reduce((prev, curr) => {
      return curr > prev ? curr : prev;
    })
  );
  return result;
}

const res = largestOfFour([
  [4, 5, 1, 3],
  [13, 27, 18, 26],
  [3002, 35, 37, 39],
  [1000, 1001, 857, 1],
]);
console.log(res);
