import axios from "axios"
import { TESTING_APP_USERNAME, TESTING_APP_PASSWORD } from "react-native-dotenv"
const testingApp = axios.create({
  baseURL: "https://google.com",
  auth: { username: TESTING_APP_USERNAME, password: TESTING_APP_PASSWORD },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
