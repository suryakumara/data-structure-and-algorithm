function confirmEnding(str, target) {
  return str.slice(str.length - target.length) === target;
}

const result = confirmEnding("Bastian", "n");
console.log(result);
