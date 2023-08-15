import classes from "./AuthenticationForm.module.css";

const AuthForm = () => {
  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <input type="text" placeholder="Enter username" required></input>
      </div>
      <div className={classes.action}>
        <button>submit</button>
      </div>
    </form>
  );
};

export default AuthForm;
