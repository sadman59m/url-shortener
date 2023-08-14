/* eslint-disable no-unused-vars */
import { useRouteLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";

const UrlManager = () => {
  const urlItem = useRouteLoaderData("url-item");
  let longUrl = urlItem.longUrl;
  if (!longUrl.includes("https")) {
    longUrl = "https://" + longUrl;
  }
  useEffect(() => {
    window.location.href = longUrl;
  }, [longUrl]);
};

export default UrlManager;

export const loader = async ({ params, request }) => {
  const urlItemId = params.urlItemId;
  const urlItems = await JSON.parse(localStorage.getItem("urlItemStorage"));
  const urlItem = urlItems.find((item) => item.id === urlItemId);
  if (urlItem) {
    return urlItem;
  } else {
    throw new Response(
      JSON.stringify({
        message1: "Someting went wrong",
        message2: "Short Url not found!",
      })
    );
  }
};
