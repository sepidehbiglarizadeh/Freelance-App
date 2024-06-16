import axios from "axios";

const BASE_URL = "http://localhost:5000/api";

// vaghti az methode create estefade mikonim yani ye axiose mokhtase khodemon ro misazim ama ba confighayi ke khodemon behesh pas midim
const app = axios.create({
  baseURL: BASE_URL,
  withCredentials: true, // har cookie ke http-only bashe, dakhele cookie haye mororgar zakhire shode bashe ro be soorate automatic be samte backend mifereste
});

app.interceptors.request.use(
  (res) => res,
  (err) => Promise.reject(err)
);

// err => response => status === 401 => process =>!!!
app.interceptors.request.use(
  (res) => res,
  async (err) => {
    console.log(err.config);
    const originalConfig = err.config;

    if (err.response.status === 401 && !originalConfig._retry) {
      originalConfig._retry = true; //dar inja in meghdare _retry ro khodemon behesh dadim ta codehaye in ghesmat faghat 1bar ejra shavand dar gheyre in soorat barname varede ye loop mishod va hang mikard
      try {
        const { data } = await axios.get(`${BASE_URL}/user/refresh-toke`, {
          withCredentials: true,
        });
        if (data) {
          // check mishe karbar rooye che requesti error dashte va dar poshte sahne bedone in ke karbar khabar dashte bashe dobare hamon requesti ke monjar be khata shode ro dobare ejra mikonim
          return app(originalConfig);
        }
      } catch (error) {
        return Promise.reject(err);
      }
    }
    return Promise.reject(err);
  }
);

const http = {
  get: app.get,
  post: app.post,
  delete: app.delete,
  patch: app.patch,
  put: app.put,
};

export default http;
