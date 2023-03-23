import axios from "axios";
import { Circle } from "react-native-maps";

const baseURL = "http://localhost:3002/api/listings";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/listings`;
const getAllListings = (
  offset,
  cityToSearch,
  minRoomsAvailable,
  minRent,
  maxRent
) => {
  let url = `${baseURL}/?offset=${offset}`;

  if (cityToSearch) {
    url += `&city=${cityToSearch}`;
  }
  if (minRoomsAvailable) {
    url += `&minRooms=${minRoomsAvailable}`;
  }
  if (minRent) {
    url += `&minRent=${minRent}`;
  }
  if (maxRent) {
    url += `&maxRent=${maxRent}`;
  }
  console.log(url);
  return axios.get(url);
};
const getAllListingsByListingIds = (offset) => {
  return axios.get(`${baseURL}/save/?offset=${offset}`);
};

const getAListingById = (id) => {
  return axios.get(`${baseURL}/${id}`);
};

const getAllListingsByUserId = (offset) => {
  return axios.get(`${baseURL}/user/?offset=${offset}`);
};

const createAListing = (listingDbObj) => {
  return axios.post(`${baseURL}`, listingDbObj);
};

const deleteAListingById = (id) => {
  return axios.delete(`${baseURL}/${id}`);
};

export default {
  getAllListings,
  getAllListingsByListingIds,
  getAListingById,
  getAllListingsByUserId,
  createAListing,
  deleteAListingById,
};
