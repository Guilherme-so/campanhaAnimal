import axios from "axios";

export default (req, res) => {
  axios.post("http://localhost:8000/auth/login").then(() => {
    [console.log("ee")];
  });
};
