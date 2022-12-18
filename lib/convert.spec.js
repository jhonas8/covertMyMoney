const conversionLib = require("./conversion");

// This test could be optimized for sure
describe("**** CONVERSION ****", () => {
  test("Testing the result", () => {
    const { convert } = conversionLib;

    const randomNums = new Array(8)
      .fill(0)
      .map(() => Math.round(Number.MAX_SAFE_INTEGER * Math.random()));

    let hadAInconsistence = false;

    randomNums.forEach((num, index) => {
      if (!index) return;

      const prevNum = randomNums[index - 1];
      const result = convert(prevNum, num);

      hadAInconsistence = result !== prevNum * num; // The conversion should always be arg1 * arg2
    });

    expect(hadAInconsistence).toBe(false);
  });
});

describe("**** formatToMoney ****", () => {
  const { formatToMoney } = conversionLib;
  const randomNum = Math.round(Number.MAX_SAFE_INTEGER * Math.random());

  const formattedNumberReal = formatToMoney(randomNum);
  const formattedNumberDollar = formatToMoney(randomNum, true);
  const formattedNumberFromStr = formatToMoney(randomNum.toString());

  test("Testing decimals", () => {
    expect(formattedNumberReal.includes(`${randomNum}.00`)).toBe(true);
    expect(formattedNumberDollar.includes(`${randomNum}.00`)).toBe(true);
  });

  test("Testing the conversion for Real", () => {
    expect(formattedNumberReal.startsWith("R$")).toBe(true);
  });

  test("Testing the conversion for Dollar", () => {
    expect(formattedNumberDollar.startsWith("$")).toBe(true);
  });

  test("Testing conversion from string number", () => {
    expect(formattedNumberFromStr).toBe(formattedNumberReal);
  });
});
