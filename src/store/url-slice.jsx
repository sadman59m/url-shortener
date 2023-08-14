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
      console.log(urlItem.id);
      const existingUrlItemIndex = state.items.findIndex(
        (item) => item.id === urlItem.id
      );
      const existingUrlItem = state.items[existingUrlItemIndex];
      let updatedItemList;
      if (existingUrlItem) {
        const newUrlItem = { ...existingUrlItem, longUrl: urlItem.longUrl };
        updatedItemList = [...state.items];
        updatedItemList[existingUrlItemIndex] = newUrlItem;
      } else {
        updatedItemList = [...state.items];
        updatedItemList.push(urlItem);
      }
      state.items = updatedItemList;
      state.changed = true;
    },
    removeUrlItem: (state, action) => {
      const urlItemId = action.payload;
      const existingUrlItems = [...state.items];
      const filteredUrlItems = existingUrlItems.filter(
        (urlItem) => urlItem.id !== urlItemId
      );
      console.log(filteredUrlItems);
      state.items = filteredUrlItems;
      state.changed = true;
    },
  },
});

export const urlItemActions = urlListSlice.actions;

export default urlListSlice;
