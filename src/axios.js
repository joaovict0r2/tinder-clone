import axios from 'axios'

const instance = axios.create({
  baseURL: "https://tinder-backend-3345.herokuapp.com/"
})

export default instance