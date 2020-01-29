import Axios from "axios";

export const SendLogin = (data, cb) => {
  Axios.post("http://localhost:5000/api/login", data)
    .then(res => {
      console.log("Login", res);
      localStorage.setItem("token", res.data.payload);
      cb();
    })
    .catch(err => {
      console.log(err);
    });
};

export const axiosWithAuth = () => {
  return Axios.create({
    baseURL: "http://localhost:5000",
    headers: {
      Authorization: localStorage.getItem("token")
    }
  });
};

export const getData = () => dispatch => {
  axiosWithAuth()
    .get("/api/friends")
    .then(res => {
      console.log("Get Data", res.data);
      dispatch({ type: "SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.log("GET_DATA_ERROR", err);
    });
};

export const sendFriend = data => dispatch => {
  axiosWithAuth()
    .post("/api/friends", data)
    .then(res => {
      dispatch({ type: "SUCCESS", payload: res.data });
    })
    .catch(err => {
      console.log("GET_DATA_ERROR", err);
    });
};
