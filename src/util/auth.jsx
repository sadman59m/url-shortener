import { redirect } from "react-router-dom";

export const getName = () => {
  const userName = localStorage.getItem("username");
  if (userName) {
    return userName;
  } else {
    return null;
  }
};

export const checkAuth = () => {
  const userName = getName();
  console.log(userName);
  if (!userName) {
    return redirect("/auth");
  }
  return null;
};
