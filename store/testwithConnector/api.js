import axios from "axios"
import {
  TEST_WITH_CONNECTOR_USERNAME,
  TEST_WITH_CONNECTOR_PASSWORD
} from "react-native-dotenv"
const testwithConnector = axios.create({
  baseURL: "https://connector.com",
  auth: {
    username: TEST_WITH_CONNECTOR_USERNAME,
    password: TEST_WITH_CONNECTOR_PASSWORD
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
export const apiService = {}
