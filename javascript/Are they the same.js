comp = (arr1, arr2) => {
  if (!arr1 || !arr2 || arr1.length !== arr2.length) return false;
  return arr1.map(x => x * x).sort().toString() === arr2.sort().toString();
}