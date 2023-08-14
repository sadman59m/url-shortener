/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ListItems from "./ListItems";
import Card from "./UI/Card";
import { fetchUrlItems, sendUrlItems } from "../store/url-actions";

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

  return (
    <div className={classes["list-container"]}>
      <Card>
        {urlList.items.length > 0 && (
          <ul className={classes.list}>
            {urlList.items.map((url) => (
              <ListItems key={url.id} urlItems={url} />
            ))}
          </ul>
        )}
        {urlList.length <= 0 && <p>No urls to show</p>}
      </Card>
    </div>
  );
};

export default UrlsList;
