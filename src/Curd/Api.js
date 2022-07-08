import axios from "axios";

export default function Api() {
  const url = "https://62c57132134fa108c2525771.mockapi.io/Curd";

  const instance = axios.create({
    baseURL: `${url}`,
  });

  return instance;
}
