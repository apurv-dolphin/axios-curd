import React, { lazy, Suspense, useEffect, useState } from "react";

import { deleteData, getData } from "../api/getdata";

const Content = lazy(() => import("./Content"));

export default function Read() {
  const [apiData, setApiData] = useState([]);

  const setData = (id, firstName, email, file) => {
    localStorage.setItem("ID", id);
    localStorage.setItem("firstName", firstName);
    localStorage.setItem("email", email);
    localStorage.setItem("file", file);
  };
  const getDatas = () => {
    getData(setApiData);
  };
  const onDelete = (id) => {
    deleteData(id, getDatas);
  };
  useEffect(() => {
    getDatas();
  }, []);

  return (
    <Suspense fallback={<div>loading</div>}>
      <Content apiData={apiData} setData={setData} onDelete={onDelete} />
    </Suspense>
  );
}
