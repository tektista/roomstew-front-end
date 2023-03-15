import axios from "axios";

//`https://nodejs-cleardb-project.herokuapp.com/api/listings/?offset=${offset}`
const baseURL = "http://localhost:3002/api/listings";

const getAllListings = (offset) => {
  return axios.get(`${baseURL}/?offset=${offset}`);
};

const getAListingById = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

export default {
  getAllListings: getAllListings,
  getAListingById: getAListingById,
};
