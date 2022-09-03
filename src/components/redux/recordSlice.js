import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  balance: 0,
  income: 0,
  expense: 0,
};

const calcPatameters = (state) => {
  state.balance = state.records.reduce(
    (total, record) => total + record.amount,
    0
  );
  state.income = state.records
    .filter((record) => record.sign === "positive")
    .reduce((total, record) => total + record.amount, 0);
  state.expense = state.records
    .filter((record) => record.sign === "negative")
    .reduce((total, record) => total + record.amount, 0);
};

const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    saving: (state, action) => {
      state.records.push(action.payload);
      calcPatameters(state);
    },
    deleteRec: (state, action) => {
      state.records = state.records.filter(
        (record) => record.id !== action.payload
      );
      calcPatameters(state);
    },
  },
});

export default recordSlice.reducer;
export const { saving, deleteRec } = recordSlice.actions;
