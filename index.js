export function add(input) {
  let result = 0,
    numbers;

  if (input.trim() == "") {
    return result;
  }

  if (input.startsWith("//")) {
    numbers = input.replace(/\\n/g, "").split(input[2]).slice(1);
  } else {
    numbers = input.replace(/\\n/g, ",").replace(/\n/g, ",").split(",");
  }

  // Calculate the sum of input numbers
  if (numbers) {
    const negativeNumbers = [];

    result = numbers
      .filter((num) => num.trim() !== "")
      .reduce((acc, num) => {
        const parsedNum = parseInt(num.trim(), 10);
        if (parsedNum < 0) {
          negativeNumbers.push(parsedNum);
        }

        return acc + parsedNum;
      }, 0);

    if (negativeNumbers.length > 0) {
      throw new Error(
        "negative numbers not allowed: " + negativeNumbers.join(", ")
      );
    }
  }

  return result;
}
