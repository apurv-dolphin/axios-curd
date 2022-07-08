import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

export default function Apicall() {
  const [datas, setDatas] = useState([]);

  const apiGet = async () => {
    await axios
      .get("https://data.covid19india.org/data.json")
      .then((response) => {
        setDatas(response.data);
      });
  };

  const deleteRow = (date, e) => {
    axios
      .delete(`https://data.covid19india.org/data.json/${date}`)
      .then((res) => {
        console.log(res);
        console.log(res.data);
        const photos = datas.filter((item) => item.date !== date);
        setDatas({ photos });
      });
  };

  useEffect(() => {
    apiGet();
  }, []);

  return (
    <>
      <Table striped bordered hover>
        <thead>
          <tr>
            <td>No#</td>
            <th>Date</th>
            <th>Confirmed Case</th>
            <th>Recovered Case</th>
            <th>Death Case</th>
          </tr>
        </thead>
        <tbody>
          {datas.length !== 0 && (
            <>
              {datas.cases_time_series.slice(60, 70).map((newdata, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{newdata.date}</td>
                    <td>{newdata.totalconfirmed}</td>
                    <td>{newdata.totalrecovered}</td>
                    <td>{newdata.totaldeceased}</td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={(e) => deleteRow(newdata.date, e)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </>
          )}
        </tbody>
      </Table>
    </>
  );
}
