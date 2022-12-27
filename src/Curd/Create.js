import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Button, Container, Form } from "react-bootstrap";
import { sendDataToAPI } from "../api/getdata";

export default function Create() {
  let navigaet = useNavigate();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [file, setFile] = useState("");
  const [fileName, setFileName] = useState("");

  const PrintData = (e) => {
    e.preventDefault();
    const datas = { firstName, email, fileName, file };
    sendDataToAPI(datas);

    navigaet("/read");
  };

  const handlechange = (e) => {
    setFileName(e.target.files[0].name);
    if (e.target.files && e.target.files[0]) {
      let img = e.target.files[0];
      try {
        const objectURL = window.URL.createObjectURL(img);
        setFile(objectURL);

      } catch (error) {
        try {
          var fileReader = new FileReader();
          fileReader.onload = (e) => (e.target.result);
          setFile(fileReader.readAsDataURL(img));
        } catch (e) {
          console.log(`File Upload not supported: ${e}`);
        }
      }
    }
  };

  return (
    <div style={{ marginTop: "100px" }}>
      <Container>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>First Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter name"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type={email}
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
            variant="primary"
            type="submit"
            style={{ marginTop: "20px" }}
            onClick={PrintData}
          >
            Submit
          </Button>
        </Form>
      </Container>
    </div>
  );
}
