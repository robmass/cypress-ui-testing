it("should return correct dataset for °C user temp and it locale", () => {
  const data = {
    "Target Temp": [
      ["2020-02-13T09:49:26Z", 350],
      ["2020-02-13T09:50:26Z", 250],
      ["2020-02-13T09:51:26Z", 125],
    ],
    "Target Fan": [
      ["2020-02-13T09:49:26Z", 40],
      ["2020-02-13T09:50:26Z", 42],
      ["2020-02-13T09:51:26Z", 45],
    ],
  };

  const variablesMap = {
    "Target Temp": "temperature",
    "Target Fan": "percentage",
  };

  const expected: string[][] = [
    ["date", "13/02/20, 09:49", "13/02/20, 09:50", "13/02/20, 09:51"],
    ["Target Temp [°C]", "177", "121", "52"],
    ["Target Fan [%]", "40", "42", "45"],
  ];

  const result = chartDataToDataset(data, variablesMap, "it", "°C");

  expect(result).to.deep.equal(expected);
});
