import { useRef } from "react";

import classes from "./AuthenticationForm.module.css";
import { Form } from "react-router-dom";

const AuthForm = () => {
  const userNameRef = useRef();

  // const handleFormSubmittion = (event) => {
  //   event.preventDefault();
  //   const enteredName = userNameRef.current.value;
  //   if (!enteredName) {
  //     return;
  //   }
  //   console.log(enteredName);
  //   localStorage.setItem("username", enteredName);
  //   userNameRef.current.value = "";
  //   return redirect("/");
  // };
  return (
    <Form className={classes.form} method="post">
      <div className={classes.control}>
        <input
          type="text"
          name="username"
          placeholder="Enter username"
          ref={userNameRef}
          required
        ></input>
      </div>
      <div className={classes.action}>
        <button>submit</button>
      </div>
    </Form>
  );
};

export default AuthForm;
