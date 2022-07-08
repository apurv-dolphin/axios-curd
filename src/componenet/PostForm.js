import axios, { Axios } from "axios";
import React, { useState } from "react";
import { Container, Form } from "react-bootstrap";

export default function PostForm() {
  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState({
    name: "",
    date: "",
    userid: "",
  });
  console.log(data);

  const handleChange = (e) => {
    const newdata = { ...data };
    newdata[e.target.name] = e.target.value;
    setData(newdata);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(url, {
      name: data.name,
      date: data.date,
      userid: parseInt(data.userid),
    });
  };
  return (
    <>
      <Container>
        <Form
          style={{ margin: "100px", padding: "50px" }}
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            name="name"
            value={data.name}
            placeholder="write name"
            onChange={(e) => handleChange(e)}
          />
          <br></br> <br></br> <br></br>
          <input
            type="date"
            name="date"
            value={data.date}
            placeholder="write date"
            onChange={(e) => handleChange(e)}
          />
          <br></br> <br></br> <br></br>
          <input
            type="number"
            name="userid"
            value={data.userid}
            placeholder="write id"
            onChange={(e) => handleChange(e)}
          />
          <br></br> <br></br>
          <button>Submit</button>
        </Form>
      </Container>
    </>
  );
}
