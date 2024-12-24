export function sum(input) {
  let result = 0;

  if (input.trim() == "") {
    return result;
  }

  let numbers = input.replace(/\\n/g, ",").replace(/\n/g, ",").split(",");

  // Calculate the sum of input numbers
  if (numbers) {
    result = numbers.reduce((acc, num) => acc + parseInt(num), 0);
  }

  return result;
}
