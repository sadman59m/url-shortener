/* eslint-disable react-refresh/only-export-components */
import { redirect } from "react-router-dom";
import Authentication from "../components/Authentication";

const AuthenticationPage = () => {
  return <Authentication />;
};

export default AuthenticationPage;

export const action = async ({ request }) => {
  const data = await request.formData();
  const userName = data.get("username");
  if (!userName) {
    return redirect("/auth");
  }

  localStorage.setItem("username", userName);
  return redirect("/");
};
