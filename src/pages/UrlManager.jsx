/* eslint-disable no-unused-vars */
import { useRouteError, useRouteLoaderData } from "react-router-dom";
import { useSelector } from "react-redux";

const UrlManager = () => {
  const urlItem = useRouteLoaderData("url-item");
  console.log(urlItem);
  const errorData = useRouteError();
  console.log(errorData);
  return (
    <>
      <h1>Url Manager Page</h1>
    </>
  );
};

export default UrlManager;

export const loader = ({ params, request }) => {
  const urlItemId = params.urlItemId;
  const urlItems = JSON.parse(localStorage.getItem("urlItemStorage"));
  const urlItem = urlItems.find((item) => item.id === urlItemId);
  if (urlItem) {
    return urlItem;
  } else {
    throw new Response(
      JSON.stringify({ message: "Someting went wrong. ShortUrl not found!" })
    );
  }
};
