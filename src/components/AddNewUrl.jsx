import NewUrlForm from "./NewUrlForm";
import Card from "./UI/Card";

import classes from "./AddNewForm.module.css";

const AddNewUrl = () => {
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
