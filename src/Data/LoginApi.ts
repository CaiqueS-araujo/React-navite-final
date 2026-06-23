import axios from "axios"
import { Platform } from "react-native";

type BaseLogin = {
    username: string,
    password: string,
}

const LoginApi =  axios.create({
    baseURL: 'https://api-de-login-s1up.onrender.com',
})

export async function SubmtitLogin(user: BaseLogin) {
  const response = await LoginApi.post('/login', user);

  return response.data;
}