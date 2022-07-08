import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image, Table } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { deleteData, getData } from "../api/getdata";

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
    <div style={{ margin: "100px" }}>
      <Container>
        <div className="my-3">
          <Link to="/">
            <Button>
              Create <AddCircleOutlineIcon />
            </Button>
          </Link>
        </div>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Email</th>
              <th>Image</th>
              <th>Update</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((newdata, index) => {
              return (
                <tr key={index}>
                  <td>{newdata.id}</td>
                  <td>{newdata.firstName}</td>
                  <td>{newdata.email}</td>
                  <td>
                    <Image
                      style={{ height: "100px" }}
                      src={newdata.file}
                      alt="not found"
                    />
                  </td>
                  <td>
                    <Link to="/update">
                      <Button
                        variant="success"
                        onClick={() =>
                          setData(
                            newdata.id,
                            newdata.firstName,
                            newdata.email,
                            newdata.file
                          )
                        }
                      >
                        Update <EditIcon />
                      </Button>
                    </Link>
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      onClick={() => onDelete(newdata.id)}
                    >
                      Delete <DeleteIcon />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}
