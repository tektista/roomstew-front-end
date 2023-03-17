import axios from "axios";

const baseURL = "http://localhost:3002/api/listings";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/listings`;
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
