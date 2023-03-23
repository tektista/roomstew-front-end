import axios from "axios";

const baseURL = "http://localhost:3002/api/rooms";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/rooms`;

const getARoomsDetailsById = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

const deleteARoomById = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};
export default {
  getARoomsDetailsById,
  deleteARoomById,
};
