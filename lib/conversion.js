const convert = (cotation, amount) => cotation * amount;

const formatToMoney = (value, dollar) =>
  `${dollar ? "" : "R"}$${Number(value).toFixed(2)}`;

module.exports = {
  convert,
  formatToMoney,
};
