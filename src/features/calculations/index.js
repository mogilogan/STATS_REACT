import * as formulas from "./formulas";

const createData = (operation, value) => {
  return { operation, value };
};

const getValues = (title, dataArray, number) => {
  if (!number) {
    return {
      title,
      data: [
        createData("Mean", formulas.calculateMean(dataArray)),
        createData("Median", formulas.calculateMedian(dataArray)),
        createData("StdDev", formulas.calculateStdDev(dataArray)),
        createData("Mode", formulas.calculateMode(dataArray)),
      ],
    };
  } else {
    const newArray = [...dataArray, number];
    return {
      title,
      data: [
        createData("Mean", formulas.calculateMean(dataArray)),
        createData("Median", formulas.calculateMedian(dataArray)),
        createData("StdDev", formulas.calculateStdDev(dataArray)),
        createData("Mode", formulas.calculateMode(dataArray)),
      ],
      data2: [
        createData("Mean", formulas.calculateMean(newArray)),
        createData("Median", formulas.calculateMedian(newArray)),
        createData("StdDev", formulas.calculateStdDev(newArray)),
        createData("Mode", formulas.calculateMode(newArray)),
      ],
    };
  }
};

export default getValues;
