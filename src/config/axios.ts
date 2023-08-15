import axios from 'axios'
 const API_URL=process.env.REACT_APP_GOOGLE_BOOKS_API
export const instance = axios.create({
    baseURL: API_URL,
    headers: {
      'Content-Type': 'application/json',
    },
  })
  