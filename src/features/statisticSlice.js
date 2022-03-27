import { createSlice } from "@reduxjs/toolkit";
import getValues from "./calculations";
import axios from "axios";
import testDataGenerator from "./testDataGenerator";

export const statSlice = createSlice({
  name: "stats",
  initialState: {
    value: {},
    calculations: [],
  },
  reducers: {
    dataLoaded: (stats, action) => {
      stats.value = action.payload;
    },
    dataLoadedFailed: (stats, action) => {
      // maybe store error in the future
    },
    DataCalculated: (stats, action) => {
      stats.calculations = action.payload;
    },
  },
});
export const {
  dataLoaded,
  dataLoadedFailed,
  DataCalculated,
} = statSlice.actions;

const calculateFormulas = (number, data, dispatch) => {
  let arr = [];
  for (let [key, value] of Object.entries(data)) {
    arr.push(getValues(key, value, number));
  }
  dispatch(DataCalculated(arr));
};
export const sampleDataGenerator = () => dispatch => {
  const data = testDataGenerator(500);
  console.log(`{sampleData: ${data} }`);
  //dispatch data to the store and perform calculations
  // dispatch(dataLoaded({ sampleData: data }));
};

export const handleHydrateDashboard = number => async dispatch => {
  const { data } = await axios.get("http://localhost:9020/api/stats");
  dispatch(dataLoaded(data));
  calculateFormulas(number, data, dispatch);
};

export const selectStats = state => {
  console.log(`state:`, state);
  return state.stats.calculations;
};

export default statSlice.reducer;
