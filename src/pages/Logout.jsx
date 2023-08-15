import { redirect } from "react-router-dom";

export const action = () => {
  localStorage.removeItem("username");
  return redirect("/auth");
};
