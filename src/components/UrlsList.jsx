/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";

import ListItems from "./ListItems";
import Card from "./UI/Card";

import classes from "./UrlsList.module.css";

const UrlsList = () => {
  const [urlList, setUrlList] = useState(
    JSON.parse(localStorage.getItem("urlListStorage")) || []
  );

  return (
    <div className={classes["list-container"]}>
      <Card>
        {urlList.length > 0 && (
          <ul className={classes.list}>
            {urlList.map((url) => (
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
