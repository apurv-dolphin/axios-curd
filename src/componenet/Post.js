import axios from "axios";
import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Post() {
  const [data, setData] = useState([]);
  useEffect(() => {
    const users = [
      {
        name: "Apurv",
        job: "ReactJs Dev",
      },
      {
        name: "Khalas",
        job: "ReactNative Dev",
      },
      {
        name: "King",
        job: "DBZ co-leader",
      },
      {
        name: "Captain",
        job: "DBZ leader",
      },
    ];
    axios.post("https://reqres.in/api/users", users).then((res) => {
      console.log(res.data);
      setData(res.data);
    });
  }, []);
  return (
    <Container>
      <div>
        {data.map((newdata) => {
          return (
            <>
              <h1>name : {newdata.name}</h1>
              <h1>Job : {newdata.job}</h1>
            </>
          );
        })}
      </div>
    </Container>
  );
}
