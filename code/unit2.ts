class Component {
  getChartData() {
    const data = // ... Call API
    const variableTypes = // ... Call API
    const locale = // ... get from user data
    const tempUnit = // ... get from user data

    this.chartData = chartDataToDataset(data, variableTypes, locale, tempUnit);
  }
}
