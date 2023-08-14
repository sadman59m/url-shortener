import { useRouteError } from "react-router-dom";

import Card from "../components/UI/Card";

const ErrorPage = () => {
  const error = useRouteError();
  const message = JSON.parse(error.data).message;
  console.log(message);
  return (
    <Card>
      <h1>{message}</h1>
    </Card>
  );
};

export default ErrorPage;
