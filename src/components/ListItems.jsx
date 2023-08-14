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
    const proceed = window.confirm("Comfirm Delete");
    if (proceed) {
      dispatch(urlItemActions.removeUrlItem(urlItemId));
    }
  };

  return (
    <li className={classes["url-list-items"]}>
      <div className={classes.urls}>
        <div>
          <span>Short Url:</span>
          <span className={classes.url} onClick={handleVisitUrl}>
            {props.urlItems.shortUrl}
          </span>
        </div>
        <div>
          <span>Long Url:</span>
          <span className={classes.url} onClick={handleVisitUrl}>
            {props.urlItems.longUrl}
          </span>
        </div>
        {isEditing && (
          <EditUrlForm urlItems={props.urlItems} onClose={handleCloseEditUrl} />
        )}
      </div>
      {!isEditing && (
        <div className={classes.action}>
          <button onClick={handleEditUrl}>Edit</button>
          <button onClick={handleDeleteUrlItem}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default UrlsList;
