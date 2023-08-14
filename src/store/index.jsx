import { configureStore } from "@reduxjs/toolkit";

import urlListSlice from "./url-slice";

const store = configureStore({
  reducer: {
    urlList: urlListSlice.reducer,
  },
});

export default store;
