/* eslint-disable react/prop-types */

import classes from "./ListItems.module.css";

const UrlsList = (props) => {
  return (
    <li className={classes["url-list-items"]}>
      <div className={classes.url}>{props.urlItems.shortUrl}</div>
      <div className={classes.url}>{props.urlItems.longUrl}</div>
    </li>
  );
};

export default UrlsList;
