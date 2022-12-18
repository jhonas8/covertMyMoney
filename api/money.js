const axios = require("axios");

const URL = "https://economia.awesomeapi.com.br/last";

const getCotation = async (currencyConversion) => {
  try {
    const response = await axios.get(`${URL}/${currencyConversion}`);

    return response.data;
  } catch (err) {
    console.err(err);
  }
};

module.exports = {
  getCotation,
  URL,
};
