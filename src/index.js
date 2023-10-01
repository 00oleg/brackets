module.exports = function check(str, bracketsConfig) {
  const arr = str.split('');
  const stack = [];
  const openingBrackets = [];
  const closingBrackets = [];

  bracketsConfig.forEach(element => {
    const [openin, closing] = element;
    openingBrackets.push(openin);
    closingBrackets.push(closing);
  });

  for (let index = 0; index < arr.length; index += 1) {
    const element = arr[index];

    if (openingBrackets.includes(element) && closingBrackets.includes(element) && !stack.includes(element)) {
      stack.push(element);
    } else if (openingBrackets.includes(element) && !closingBrackets.includes(element)) {
      stack.push(element);
    } else if (stack.length) {
      const openIndex = openingBrackets.indexOf(stack.pop());
      if (closingBrackets[openIndex] !== element) {
        return false;
      }
    } else {
      return false;
    }
  }

  return !stack.length;
}
