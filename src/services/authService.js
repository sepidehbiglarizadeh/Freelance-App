import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export function checkOtp(data) {
  return http.post("/user/check-otp", data).then(({ data }) => data.data);
}

export function completeProfile(data) {
  return http
    .post("/user/complete-profile", data)
    .then(({ data }) => data.data);
}

export function getUser(data) {
  return http.get("/user/profile").then(({ data }) => data.data);
}

export function logoutUserApi(data) {
  return http.get("/user/logout").then(({ data }) => data.data);
}

export function getUserApi(data) {
  return http.get("/admin/user/list").then(({ data }) => data.data);
}

export function changeUserStatusApi({ userId, data }) {
  return http
    .patch(`/admin/user/verify/${userId}`, data)
    .then(({ data }) => data.data);
}
