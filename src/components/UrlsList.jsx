/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Form } from "react-router-dom";

import ListItems from "./ListItems";
import Card from "./UI/Card";
import { fetchUrlItems, sendUrlItems } from "../store/url-actions";
import { getName } from "../util/auth";

import classes from "./UrlsList.module.css";

const UrlsList = () => {
  const urlList = useSelector((state) => state.urlList);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUrlItems());
  }, [dispatch]);

  useEffect(() => {
    if (urlList.changed) {
      dispatch(sendUrlItems(urlList.items));
    }
  }, [urlList, dispatch]);

  const userName = getName();

  const handleLogout = () => {};

  return (
    <div className={classes["list-container"]}>
      <Card>
        <div className={classes.action}>
          <h3>{`User: ${userName}`}</h3>
          <Form action="/logout" method="post">
            <button onClick={handleLogout}>Logout</button>
          </Form>
        </div>
        {urlList.items.length > 0 && (
          <ul className={classes.list}>
            {urlList.items.map((url) => (
              <ListItems key={url.id} urlItems={url} />
            ))}
          </ul>
        )}
        {urlList.items.length === 0 && <p>No urls to show</p>}
      </Card>
    </div>
  );
};

export default UrlsList;
