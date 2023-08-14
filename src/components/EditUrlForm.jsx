/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { useDispatch } from "react-redux";
import classes from "./EditUrlForm.module.css";
import { urlItemActions } from "../store/url-slice";

const EditUrlForm = (props) => {
  const dispatch = useDispatch();
  const editUrlValueRef = useRef();
  const handleEditedUrlSubmit = (event) => {
    event.preventDefault();
    const enteredEditedUrl = editUrlValueRef.current.value;
    if (!enteredEditedUrl) {
      return;
    }
    const ulrItem = { ...props.urlItems, longUrl: enteredEditedUrl };
    console.log(ulrItem);
    dispatch(urlItemActions.addUrlItem(ulrItem));
    props.onClose();
    editUrlValueRef.current.value = "";
  };
  return (
    <form className={classes["edit-form"]} onSubmit={handleEditedUrlSubmit}>
      <div>
        <input
          type="text"
          defaultValue={props.urlItems.longUrl}
          ref={editUrlValueRef}
          required
        />
      </div>
      <div className={classes.action}>
        <button>update</button>
        <button onClick={props.onClose}>cancel</button>
      </div>
    </form>
  );
};

export default EditUrlForm;
