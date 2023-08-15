import { redirect } from "react-router-dom";

export const getName = () => {
  const userName = localStorage.getItem("userName");
  if (userName) {
    return userName;
  } else {
    return null;
  }
};

export const checkAuth = () => {
  const userName = getName();
  if (!userName) {
    return redirect("/auth");
  }
  return null;
};
