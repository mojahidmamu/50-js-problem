// Group Array Elements by a Specific Property

function groupBy(arr, key) {
  return arr.reduce((group, item) => {
      const keyValue = item[key];
      (group[keyValue] = group[keyValue] || []).push(item);
      return group;
  }, {});
}
console.log(groupBy([{ type: 'fruit', name: 'apple' }, { type: 'fruit', name: 'banana' }, { type: 'vegetable', name: 'carrot' }], 'type'));
// { fruit: [...], vegetable: [...] }