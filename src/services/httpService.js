import axios from "axios";

// vaghti az methode create estefade mikonim yani ye axiose mokhtase khodemon ro misazim ama ba confighayi ke khodemon behesh pas midim
const app = axios.create({
  baseURL: "http://localhost:5000/api",
  withCredentials: true,
});

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};

export default http;
