/* eslint-disable react/prop-types */

import { useState } from "react";
import { useDispatch } from "react-redux";
import classes from "./ListItems.module.css";
import EditUrlForm from "./EditUrlForm";
import { urlItemActions } from "../store/url-slice";

const UrlsList = (props) => {
  const dispatch = useDispatch();
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
  const handleDeleteUrlItem = () => {
    const urlItemId = props.urlItems.id;
    dispatch(urlItemActions.removeUrlItem(urlItemId));
  };
  return (
    <li className={classes["url-list-items"]}>
      <div className={classes.urls}>
        <div
          className={classes.url}
        >{`Short Url: ${props.urlItems.shortUrl}`}</div>
        <div
          className={classes.url}
        >{`Long Url: ${props.urlItems.longUrl}`}</div>
        {isEditing && (
          <EditUrlForm urlItems={props.urlItems} onClose={handleCloseEditUrl} />
        )}
      </div>
      {!isEditing && (
        <div className={classes.action}>
          <button onClick={handleVisitUrl}>visit</button>
          <button onClick={handleEditUrl}>Edit</button>
          <button onClick={handleDeleteUrlItem}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default UrlsList;
