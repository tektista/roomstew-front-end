import axios from "axios";
import moment from "moment";

const baseURL = "http://localhost:3002/api/listings";
// const baseURL = `https://nodejs-cleardb-project.herokuapp.com/api/listings`;

const getAllListings = (
  offset,
  cityToSearch,
  minRoomsAvailable,
  minRent,
  maxRent,
  postCodeToSearch,
  dateAvailableBy,
  maxDeposit,
  isRoomFurnished,
  isRoomEnsuite,
  isFurnished,
  hasLivingRoom,
  bathroomCount,
  hasHmo,
  billsIncluded,
  internetIncluded,
  buildingType,
  hasGarden,
  hasParking
) => {
  let url = `${baseURL}/?offset=${offset}`;

  if (cityToSearch) {
    url += `&city=${cityToSearch}`;
  }
  if (postCodeToSearch) {
    url += `&postcode=${postCodeToSearch}`;
  }

  if (minRent) {
    url += `&minRent=${minRent}`;
  }
  if (maxRent) {
    url += `&maxRent=${maxRent}`;
  }
  if (maxDeposit) {
    url += `&maxDeposit=${maxDeposit}`;
  }
  if (dateAvailableBy) {
    url += `&dateAvailable=${dateAvailableBy.toISOString()}`;
  }
  if (minRoomsAvailable) {
    url += `&minRooms=${minRoomsAvailable}`;
  }
  if (isRoomFurnished !== "") {
    url += `&isRoomFurnished=${Boolean(isRoomFurnished)}`;
  }
  if (isRoomEnsuite !== "") {
    console.log("isRoomEnsuite", isRoomEnsuite);
    url += `&isRoomEnsuite=${isRoomEnsuite}`;
  }
  if (isFurnished !== "") {
    url += `&isFurnished=${Boolean(isFurnished)}`;
  }
  if (hasLivingRoom !== "") {
    url += `&hasLivingRoom=${Boolean(hasLivingRoom)}`;
  }
  if (bathroomCount) {
    url += `&bathroomCount=${bathroomCount}`;
  }
  if (hasHmo !== "") {
    url += `&hasHmo=${hasHmo}`;
  }
  if (billsIncluded !== "") {
    url += `&billsIncluded=${Boolean(billsIncluded)}`;
  }
  if (internetIncluded !== "") {
    url += `&internetIncluded=${Boolean(internetIncluded)}`;
  }

  if (buildingType !== "") {
    url += `&buildingType=${buildingType}`;
  }
  if (hasGarden !== "") {
    url += `&hasGarden=${Boolean(hasGarden)}`;
  }
  if (hasParking !== "") {
    url += `&hasParking=${Boolean(hasParking)}`;
  }

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
