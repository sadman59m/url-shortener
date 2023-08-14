import NewUrlForm from "./NewUrlForm";
import Card from "./UI/Card";

import classes from "./AddNewForm.module.css";

const AddNewUrl = () => {
  const urlList = [
    { id: 1, short: "www.jsx.com", long: "www.javascriptxml.com" },
    { id: 2, short: "www.anthr.com", long: "www.anotherlongurl.com" },
  ];
  // const onAdd = () => {
  //   const urlListStore = JSON.stringify(urlList);
  //   localStorage.setItem("urlListStorage", urlListStore);
  // };
  return (
    <Card className={classes["add-new-form"]}>
      <h1>Paste the long url to be shortened</h1>
      <div>
        <NewUrlForm />
      </div>
    </Card>
  );
};

export default AddNewUrl;
