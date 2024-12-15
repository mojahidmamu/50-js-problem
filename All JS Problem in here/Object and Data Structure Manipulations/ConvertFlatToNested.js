// Convert a Flat Array into a Nested Object
function toNestedObject(arr, key) {
  return arr.reduce((acc, item) => {
    acc[item[key]] = item;
    return acc;
  }, {});
}
console.log(
  toNestedObject(
    [
      { id: 1, name: "A" },
      { id: 2, name: "B" },
    ],
    "id"
  )
);
// { 1: { id: 1, name: "A" }, 2: { id: 2, name: "B" } }
