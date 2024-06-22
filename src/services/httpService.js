import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

 // vaghti az methode create estefade mikonim yani ye axiose mokhtase khodemon ro misazim ama ba confighayi ke khodemon behesh pas midim
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

// err => response => status === 401 => process =>!!!
app.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;
    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true;
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-token`, {
          withCredentials: true,
        });
        if (data) return app(originalConfig); // check mishe karbar rooye che requesti error dashte va dar poshte sahne bedone in ke karbar khabar dashte bashe dobare hamon requesti ke monjar be khata shode ro dobare ejra mikonim
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  put: app.put,
  patch: app.patch,
};

export default http;
