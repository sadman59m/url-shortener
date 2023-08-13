const AddNewUrl = () => {
  const urlList = [
    { id: 1, short: "www.jsx.com", long: "www.javascriptxml.com" },
    { id: 2, short: "www.anthr.com", long: "www.anotherlongurl.com" },
  ];
  const onAdd = () => {
    const urlListStore = JSON.stringify(urlList);
    localStorage.setItem("urlListStorage", urlListStore);
  };
  return (
    <>
      <button onClick={onAdd}>Add urls</button>
    </>
  );
};

export default AddNewUrl;
