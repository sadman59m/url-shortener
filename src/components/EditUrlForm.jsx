/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { urlItemActions } from "../store/url-slice";
import { getName } from "../util/auth";

import classes from "./EditUrlForm.module.css";

const EditUrlForm = (props) => {
  const dispatch = useDispatch();
  const editUrlValueRef = useRef();
  const userName = getName();

  console.log(props.urlItems);
  const handleEditedUrlSubmit = (event) => {
    event.preventDefault();
    const enteredEditedUrl = editUrlValueRef.current.value;
    if (!enteredEditedUrl) {
      return;
    }
    const ulrItem = { ...props.urlItems, longUrl: enteredEditedUrl };
    const urlUserItem = {
      username: userName,
      item: ulrItem,
    };
    dispatch(urlItemActions.updateItem(urlUserItem));
    props.onClose();
    editUrlValueRef.current.value = "";
  };
  return (
    <form className={classes["edit-form"]} onSubmit={handleEditedUrlSubmit}>
      <div className={classes["form-control"]}>
        <input
          type="text"
          defaultValue={props.urlItems.longUrl}
          ref={editUrlValueRef}
          required
        />
      </div>
      <div className={classes.action}>
        <button className={classes.update}>update</button>
        <button className={classes.cancel} onClick={props.onClose}>
          cancel
        </button>
      </div>
    </form>
  );
};

export default EditUrlForm;
