import AuthForm from "./AuthenticationForm";
import Card from "./UI/Card";

import classes from "./Authentication.module.css";

const Authentication = () => {
  return (
    <Card className={classes.main}>
      <h1>Authentication page</h1>
      <AuthForm />
    </Card>
  );
};

export default Authentication;
