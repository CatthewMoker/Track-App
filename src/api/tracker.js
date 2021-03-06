import axios from "axios";
import { AsyncStorage } from "react-native";
import Constants from "expo-constants";

const instance = axios.create({
  baseURL: Constants.manifest.baseURL,
});

instance.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);

export default instance;
