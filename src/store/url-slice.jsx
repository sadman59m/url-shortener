import { createSlice } from "@reduxjs/toolkit";

const urlListSlice = createSlice({
  name: "urlList",
  initialState: {
    items: [],
    changed: false,
  },
  reducers: {
    replaceUrlItems: (state, action) => {
      const urlItems = action.payload;
      state.items = urlItems;
    },
    addUrlItem: (state, action) => {
      const urlItem = action.payload;
      console.log(urlItem);
      state.items.push(urlItem);
      state.changed = true;
    },
  },
});

export const urlItemActions = urlListSlice.actions;

export default urlListSlice;
