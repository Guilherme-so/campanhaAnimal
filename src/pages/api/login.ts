import axios from "axios";

interface IParams {
  email: string;
  password: string;
}

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response.status) {
      return error?.response;
    }
  }
);

export default async function tryLogin({
  email,
  password,
}: IParams): Promise<void> {
  return axios.post("http://localhost:8000/auth/login", { email, password });
}
