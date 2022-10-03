import axios from "axios";


const baseUrl = `http://localhost:5500`;
export const api = {
  get: async ({url}) => {
    const result = await axios.get(`${baseUrl}/${url}`)
    return result;
  },
  post: async ({url, body}) => {
    const result = await axios.post(`${baseUrl}/${url}`,body)
    return result;
  },
  put: async ({url, body}) => {
    const result = await axios.put(`${baseUrl}/${url}`, body)
    return result
  },
  delete: async ({url}) => {
    const result = await axios.delete(`${baseUrl}/${url}`)
  },
};
