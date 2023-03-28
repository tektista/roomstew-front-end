import axios from "axios";
import moment from "moment";

const baseURL = "http://localhost:3002/api/listings";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/listings`;

const getAllListings = (offset, filtersObj) => {
  console.log("filtersObjIn listings service", filtersObj);
  let url = `${baseURL}/?offset=${offset}`;

  if (filtersObj.cityToSearch) {
    url += `&city=${filtersObj.cityToSearch}`;
  }
  if (filtersObj.postcodeToSearch) {
    url += `&postcode=${filtersObj.postcodeToSearch}`;
  }
  if (filtersObj.minRent) {
    url += `&minRent=${filtersObj.minRent}`;
  }
  if (filtersObj.maxRent) {
    url += `&maxRent=${filtersObj.maxRent}`;
  }
  if (filtersObj.maxDeposit) {
    url += `&maxDeposit=${filtersObj.maxDeposit}`;
  }
  if (
    moment(filtersObj.dateAvailableBy).format("YYYY-MM-DD") !==
    moment(new Date()).format("YYYY-MM-DD")
  ) {
    url += `&dateAvailable=${filtersObj.dateAvailableBy.toISOString()}`;
  }
  if (filtersObj.minRoomsAvailable) {
    url += `&minRooms=${filtersObj.minRoomsAvailable}`;
  }
  //HANDLE boolean/0,1 values differently
  if (filtersObj.isRoomFurnished > -1) {
    url += `&isRoomFurnished=${filtersObj.isRoomFurnished}`;
  }
  if (filtersObj.isRoomEnsuite > -1) {
    url += `&isRoomEnsuite=${filtersObj.isRoomEnsuite}`;
  }
  if (filtersObj.isFurnished > -1) {
    url += `&isFurnished=${filtersObj.isFurnished}`;
  }
  if (filtersObj.hasLivingRoom > -1) {
    url += `&hasLivingRoom=${filtersObj.hasLivingRoom}`;
  }
  if (filtersObj.bathroomCount > -1) {
    url += `&bathroomCount=${filtersObj.bathroomCount}`;
  }
  if (filtersObj.hasHmo > -1) {
    url += `&hasHmo=${filtersObj.hasHmo}`;
  }
  if (filtersObj.billsIncluded > -1) {
    url += `&billsIncluded=${filtersObj.billsIncluded}`;
  }
  if (filtersObj.internetIncluded > -1) {
    url += `&internetIncluded=${filtersObj.internetIncluded}`;
  }

  if (filtersObj.buildingType > -1) {
    url += `&buildingType=${filtersObj.buildingType}`;
  }
  if (filtersObj.hasGarden > -1) {
    url += `&hasGarden=${filtersObj.hasGarden}`;
  }
  if (filtersObj.hasParking > -1) {
    url += `&hasParking=${filtersObj.hasParking}`;
  }
  console.log("url", url);
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

const updateAListingById = (id, listingDbObj) => {
  return axios.put(`${baseURL}/${id}`, listingDbObj);
};

export default {
  getAllListings,
  getAllListingsByListingIds,
  getAListingById,
  getAllListingsByUserId,
  createAListing,
  deleteAListingById,
  updateAListingById,
};
