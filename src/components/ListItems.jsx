/* eslint-disable react/prop-types */

import { useState } from "react";
import classes from "./ListItems.module.css";
import EditUrlForm from "./EditUrlForm";

const UrlsList = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleVisitUrl = () => {
    const url = "http://" + props.urlItems.longUrl;
    window.open(url, "_blank");
  };
  const handleEditUrl = () => {
    setIsEditing(true);
  };
  const handleCloseEditUrl = () => {
    setIsEditing(false);
  };
  return (
    <li className={classes["url-list-items"]}>
      <div className={classes.url}>
        <span>{props.urlItems.shortUrl}</span>
        {isEditing && (
          <EditUrlForm
            longUrl={props.urlItems.longUrl}
            onClose={handleCloseEditUrl}
          />
        )}
      </div>
      {!isEditing && (
        <div className={classes.action}>
          <button onClick={handleVisitUrl}>visit</button>
          <button onClick={handleEditUrl}>Edit</button>
          <button>Delete</button>
        </div>
      )}
    </li>
  );
};

export default UrlsList;
