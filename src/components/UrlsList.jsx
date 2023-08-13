import ListItems from "./ListItems";
import Card from "./UI/Card";

import classes from "./UrlsList.module.css";

const UrlsList = () => {
  const urlListStorage = localStorage.getItem("urlListStorage");
  const urlLists = JSON.parse(urlListStorage);
  return (
    <div className={classes["list-container"]}>
      <Card>
        <ul className={classes.list}>
          {urlLists.map((url) => (
            <ListItems key={url.id} urlItems={url} />
          ))}
        </ul>
      </Card>
    </div>
  );
};

export default UrlsList;
