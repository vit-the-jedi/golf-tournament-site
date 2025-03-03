export function transformForAccordion(array) {
  console.log(array);
  return array.map((item) => ({
    description: item,
    value: item,
  }));
}
