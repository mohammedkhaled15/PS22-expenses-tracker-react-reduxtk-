import { configureStore } from "@reduxjs/toolkit";
import recordreducer from "./recordSlice";

const store = configureStore({
  reducer: {
    records: recordreducer,
  },
});

export default store;
