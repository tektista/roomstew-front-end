import axios from "axios";

const baseURL = "http://localhost:3002/api/listings";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/listings`;
const getAllListings = (offset) => {
  return axios.get(`${baseURL}/?offset=${offset}`);
};

const getAListingById = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

const getAllListingsByUserId = (offset) => {
  console.log(offset);
  return axios.get(`${baseURL}/user/?offset=${offset}`);
};

export default {
  getAllListings,
  getAListingById,
  getAllListingsByUserId,
};
