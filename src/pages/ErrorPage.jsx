import { useRouteError, Link } from "react-router-dom";

import classes from "./ErrorPage.module.css";

import Card from "../components/UI/Card";

const ErrorPage = () => {
  const error = useRouteError();
  let message1, message2;
  if (error) {
    message1 = JSON.parse(error.data).message1;
    message2 = JSON.parse(error.data).message2;
  }
  return (
    <Card className={classes.errorModule}>
      <h1>{message1}</h1>
      <p>{message2}</p>
      <Link to="/">Go Back</Link>
    </Card>
  );
};

export default ErrorPage;
