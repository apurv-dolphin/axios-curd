import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { Button, Container, Form } from "react-bootstrap";
import { sendDataToAPIupdate } from "../api/getdata";
export default function Update() {
  let navigate = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [ID, setID] = useState(null);

  const PrintDatas = (e) => {
    e.preventDefault();
    const datas = { firstName, email, file };
    sendDataToAPIupdate(datas, ID);

    navigate("/read");
  };

  const handlechange = (e) => {
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      setFile(URL.createObjectURL(img));
    }
  };

  useEffect(() => {
    setFirstName(localStorage.getItem("firstName"));
    setEmail(localStorage.getItem("email"));
    setID(localStorage.getItem("ID"));
    setFile(localStorage.getItem("file"));
  }, []);

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              value={firstName}
              placeholder="Enter name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <div>
            <Form.Label>Uploda your image </Form.Label>
            <Form.Control type="file" name="file" onChange={handlechange} />
          </div>

          <Button
            style={{ marginTop: "20px" }}
            variant="primary"
            type="submit"
            onClick={PrintDatas}
          >
            submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
