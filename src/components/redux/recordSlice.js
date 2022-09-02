import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  records: [],
  balance: 0,
};
const recordSlice = createSlice({
  name: "record",
  initialState,
  reducers: {
    saving: (state, action) => {
      state.records.push(action.payload);
      state.balance = state.records.reduce(
        (total, record) => total + record.amount,
        0
      );
    },
  },
});

export default recordSlice.reducer;
export const { saving } = recordSlice.actions;
