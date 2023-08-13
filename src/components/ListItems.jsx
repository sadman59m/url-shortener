/* eslint-disable react/prop-types */
import classes from "./ListItems.module.css";

const UrlsList = (props) => {
  return (
    <li className={classes["url-list-items"]}>
      <span className={classes.url}>{props.urlItems.short}</span>
      <span className={classes.url}>{props.urlItems.long}</span>
    </li>
  );
};

export default UrlsList;
