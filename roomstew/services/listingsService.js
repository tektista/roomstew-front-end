import axios from "axios";

const baseURL = "http://localhost:3002/api/listings";

const getAllListings = () => {
  return axios.get(baseURL);
};

const getAListingById = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

export default {
  getAllListings: getAllListings,
  getAListingById: getAListingById,
};
