import { createSlice } from "@reduxjs/toolkit";

const urlListSlice = createSlice({
  name: "urlList",
  initialState: {
    userItems: [],
    changed: false,
  },
  reducers: {
    replaceUrlItems: (state, action) => {
      const userItems = action.payload;
      state.userItems = userItems || [];
    },

    addUrlItem: (state, action) => {
      const newUserItem = action.payload;
      const userName = newUserItem.username;
      const item = newUserItem.item;
      const existingUserItemIndex = state.userItems.findIndex(
        (userItem) => userItem.username === userName
      );
      const existingUserItem = state.userItems[existingUserItemIndex];
      let updatedUserItems;

      if (existingUserItem) {
        const updatedItem = { ...existingUserItem };
        const updatedItemArray = [...updatedItem.items];
        updatedItemArray.push(item);
        updatedItem.items = updatedItemArray;
        updatedUserItems = [...state.userItems];
        updatedUserItems[existingUserItemIndex] = updatedItem;
      } else {
        updatedUserItems = [...state.userItems];
        const itemsArray = [];
        itemsArray.push(item);
        const newUserArrayItem = { username: userName, items: itemsArray };
        updatedUserItems.push(newUserArrayItem);
      }

      state.userItems = updatedUserItems;
      state.changed = true;

      // console.log(urlItem.id);
      // const existingUrlItemIndex = state.items.findIndex(
      //   (item) => item.id === urlItem.id
      // );
      // const existingUrlItem = state.items[existingUrlItemIndex];
      // let updatedItemList;
      // if (existingUrlItem) {
      //   const newUrlItem = { ...existingUrlItem, longUrl: urlItem.longUrl };
      //   updatedItemList = [...state.items];
      //   updatedItemList[existingUrlItemIndex] = newUrlItem;
      // } else {
      //   updatedItemList = [...state.items];
      //   updatedItemList.push(urlItem);
      // }
      // state.items = updatedItemList;
      // state.changed = true;
    },
    updateItem: (state, action) => {
      const newUserItem = action.payload;
      const userName = newUserItem.username;
      const item = newUserItem.item;
      const itemId = item.id;

      const existingUserIndex = state.userItems.findIndex(
        (userItem) => userItem.username === userName
      );
      const existingUser = state.userItems[existingUserIndex];
      let updatedUserItems;

      if (existingUser) {
        const updatedUser = { ...existingUser };
        const existingUserItemIndex = updatedUser.items.findIndex(
          (item) => item.id === itemId
        );
        const existingUserItem = updatedUser.items[existingUserItemIndex];

        if (existingUserItem) {
          const updatedUserItem = {
            ...existingUserItem,
            longUrl: item.longUrl,
          };
          updatedUser.items[existingUserItemIndex] = updatedUserItem;
          updatedUserItems = [...state.userItems];
          updatedUserItems[existingUserIndex] = updatedUser;
        }
        // const existingUserUrlItemIndex = state.userItems[
        //   existingUserItemIndex
        // ].items.findIndex((item) => item.id === itemId);

        // state.userItems[existingUserItemIndex].items[existingUserUrlItemIndex] =
        //   item;
      }
      state.userItems = updatedUserItems;
      state.changed = true;
    },
    removeUrlItem: (state, action) => {
      const userName = action.payload.username;
      const itemId = action.payload.itemId;
      const existingUserIndex = state.userItems.findIndex(
        (userItem) => userItem.username === userName
      );
      const existingUser = state.userItems[existingUserIndex];
      let updatedUserItems;
      if (existingUser) {
        const updatedUser = { ...existingUser };
        const updatedUserArrayItems = updatedUser.items.filter(
          (item) => item.id !== itemId
        );
        updatedUser.items = updatedUserArrayItems;
        updatedUserItems = [...state.userItems];
        updatedUserItems[existingUserIndex] = updatedUser;
      }
      state.userItems = updatedUserItems;
      state.changed = true;
    },
  },
});

export const urlItemActions = urlListSlice.actions;

export default urlListSlice;
