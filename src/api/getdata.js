import axios from "axios";

const url = "https://62c57132134fa108c2525771.mockapi.io/Curd";

const getData = (setApiData) => {
  axios
    .get(url)
    .then((res) => {
      setApiData(res.data);
    })
    .catch((err) => console.log(err));
};

const sendDataToAPI = (datas) => {
  axios
    .post(url, datas)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const sendDataToAPIupdate = (datas, ID) => {
  axios
    .put(`${url}/${ID}`, datas)
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};

const deleteData = (id, getDatas) => {
  axios.delete(`${url}/${id}`).then(() => {
    getDatas();
  });
};

export { sendDataToAPI, sendDataToAPIupdate, deleteData, getData };
