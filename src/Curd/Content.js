import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Image, Table } from "react-bootstrap";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export default function Content(props) {
  const { apiData, setData, onDelete } = props;
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
              <th className="tableheader">ID</th>
              <th className="tableheader">First Name</th>
              <th className="tableheader">Email</th>
              <th className="tableheader">Image</th>
              <th className="tableheader">Update</th>
              <th className="tableheader">Delete</th>
            </tr>
          </thead>
          <tbody>
            {apiData.map((newdata, index) => {
              return (
                <tr key={index}>
                  <td>
                    <div className="tabledata">
                      {newdata.id}
                    </div>
                  </td>
                  <td>
                    <div className="tabledata">
                      {newdata.firstName}
                    </div>
                  </td>
                  <td>
                    <div className="tabledata">
                      {newdata.email}
                    </div>
                  </td>
                  <td>
                    <div className="tabledata">
                      <Image
                        style={{ height: "100px" }}
                        src={newdata.file}
                        alt="not found"
                      />
                    </div>
                  </td>
                  <td>
                    <div className="tabledata">
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
                    </div>
                  </td>
                  <td>
                    <div className="tabledata">
                      <Button
                        variant="danger"
                        onClick={() => onDelete(newdata.id)}
                      >
                        Delete <DeleteIcon />
                      </Button>
                    </div>
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
