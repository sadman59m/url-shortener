/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { urlItemActions } from "../store/url-slice";
import { getName } from "../util/auth";

import classes from "./NewInputForm.module.css";

const NewForm = () => {
  const urlItems = useSelector((state) => state.urlList.items);
  const dispatch = useDispatch();
  const urlInputRef = useRef();
  const userName = getName();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredLongUrl = urlInputRef.current.value;
    if (!enteredLongUrl) {
      return;
    }
    const uuid = uuidv4();
    const newUrlItem = {
      username: userName,
      item: {
        shortUrl: "https://url-shortener-beige-gamma.vercel.app/" + uuid,
        longUrl: enteredLongUrl,
        id: uuid,
      },
    };
    dispatch(urlItemActions.addUrlItem(newUrlItem));
    urlInputRef.current.value = "";
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <input
          type="text"
          placeholder="Enter long URL here"
          ref={urlInputRef}
          required
        ></input>
      </div>
      <div className={classes.action}>
        <button>Generate</button>
      </div>
    </form>
  );
};

export default NewForm;
