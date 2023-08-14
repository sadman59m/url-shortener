import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import AddNewUrl from "./components/AddNewUrl";
import UrlsList from "./components/UrlsList";
import { fetchUrlItems, sendUrlItems } from "./store/url-actions";

function App() {
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
    <>
      <AddNewUrl />
      <UrlsList />
    </>
  );
}

export default App;
