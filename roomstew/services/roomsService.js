import axios from "axios";

const baseURL = "http://localhost:3002/api/rooms";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/rooms`;

const getARoomsDetailsById = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

const deleteARoomById = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

const updateARoomById = (id, roomObj) => {
  console.log("here");
  console.log(roomObj);

  return axios.put(`${baseURL}/${id}`, roomObj);
};

const createARoomByListingId = (id, roomObj) => {
  return axios.post(`${baseURL}/${id}`, roomObj);
};
export default {
  getARoomsDetailsById,
  createARoomByListingId,
  deleteARoomById,
  updateARoomById,
};
