// Remove Falsy Values from an Array
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}
console.log(removeFalsyValues([0, 1, false, 2, '', 3])); // [1, 2, 3]