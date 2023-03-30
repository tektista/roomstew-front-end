import axios from "axios";

const baseURL = "http://localhost:3002/api/save";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/save`;

const getSavedListingIdsByUserId = () => {
  return axios.get(`${baseURL}`);
};

const saveAListingByUserAndListingId = (listingId) => {
  return axios.post(`${baseURL}/${listingId}`);
};

const deleteASavedListingByUserAndListingId = (listingId) => {
  return axios.delete(`${baseURL}/${listingId}`);
};

export default {
  saveAListingByUserAndListingId,
  getSavedListingIdsByUserId,
  deleteASavedListingByUserAndListingId,
};
