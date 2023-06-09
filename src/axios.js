import axios from "axios"

const instance = axios.create({
    baseURL: "http://127.0.0.1:5001/clone-e99f7/us-central1/api" // API (cloud function) URL
})

export default instance;