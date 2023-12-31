/* eslint-disable no-unused-vars */
import { urlItemActions } from "./url-slice";

export const fetchUrlItems = () => {
  return (dispatch) => {
    const urlItems = JSON.parse(localStorage.getItem("urlItemStorage")) || [];

    dispatch(urlItemActions.replaceUrlItems(urlItems));
  };
};

export const sendUrlItems = (urlList) => {
  return (dispatch) => {
    localStorage.setItem("urlItemStorage", JSON.stringify(urlList));
  };
};
