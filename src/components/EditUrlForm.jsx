/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useRef } from "react";
import classes from "./EditUrlForm.module.css";

const EditUrlForm = (props) => {
  const editUrlValueRef = useRef();
  const handleEditedUrlSubmit = (event) => {
    event.preventDefault();
    const enteredEditedUrl = editUrlValueRef.current.value;
    if (!enteredEditedUrl) {
      return;
    }
    console.log(enteredEditedUrl);
    props.onClose();
    editUrlValueRef.current.value = "";
  };
  return (
    <form className={classes["edit-form"]} onSubmit={handleEditedUrlSubmit}>
      <div>
        <input type="text" defaultValue={props.longUrl} ref={editUrlValueRef} />
      </div>
      <div className={classes.action}>
        <button>update</button>
        <button onClick={props.onClose}>cancel</button>
      </div>
    </form>
  );
};

export default EditUrlForm;
