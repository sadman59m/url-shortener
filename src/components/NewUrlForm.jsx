import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";

import classes from "./NewInputForm.module.css";

const NewForm = () => {
  const urlInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredLongUrl = urlInputRef.current.value;
    if (!enteredLongUrl) {
      return;
    }
    const uuid = uuidv4();
    const newUrlItem = {
      shortUrl: "www." + uuid + ".com",
      longUrl: enteredLongUrl,
      id: uuid,
    };
    let urlList = JSON.parse(localStorage.getItem("urlListStorage"));
    if (!urlList) {
      urlList = [];
    }
    urlList.push(newUrlItem);
    localStorage.setItem("urlListStorage", JSON.stringify(urlList));
    urlInputRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="enter url here"
          ref={urlInputRef}
          required
        ></input>
      </div>
      <div className={classes.action}>
        <button>Create</button>
      </div>
    </form>
  );
};

export default NewForm;
