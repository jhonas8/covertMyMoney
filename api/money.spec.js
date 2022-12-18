const api = require("./money");

const axios = require("axios");

jest.mock("axios");

describe("**** Testing the Money API ****", () => {
  const PARAM = "CUR1-CUR2";
  const cotation = Math.round(Number.MAX_SAFE_INTEGER * Math.random());

  const response = {
    data: {
      [PARAM.replace(/-/g, "")]: {
        bid: cotation,
      },
    },
  };

  axios.get.mockResolvedValue(response);

  test("Testing the response", () => {
    api.getCotation(PARAM).then((res) => expect(res).toEqual(response.data));
  });

  test("Testing the URL", () => {
    api.getCotation(PARAM);
    expect(axios.get.mock.calls[0][0]).toBe(`${api.URL}/${PARAM}`);
  });
});
