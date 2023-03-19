const convertListingForFrontEnd = (listingObj, savedQueryRows) => {
  const newListing = {
    ...listingObj,
    is_furnished: listingObj.is_furnished === 1 ? "Yes" : "No",
    bills_included:
      listingObj.bills_included === 1 ? "Included" : "Not included",
    internet_included:
      listingObj.internet_included === 1 ? "Included" : "Not included",
    has_living_room: listingObj.has_living_room === 1 ? "Yes" : "No",
    has_garden: listingObj.has_garden === 1 ? "Yes" : "No",
    has_parking: listingObj.has_parking === 1 ? "Yes" : "No",
    couples_allowed:
      listingObj.couples_allowed === 1 ? "Allowed" : "Not Allowed",
    smokers_allowed:
      listingObj.smokers_allowed === 1 ? "Allowed" : "Not Allowed",
    pets_allowed: listingObj.pets_allowed === 1 ? "Allowed" : "Not Allowed",
    building_type: ["Flat", "House", "Other"][listingObj.building_type],
    gender_preference: ["Any", "Male only", "Female Only"][
      listingObj.gender_preference
    ],
    age_preference: `${listingObj.min_age} - ${listingObj.max_age}`,
    saved: savedQueryRows.some(
      (obj) => obj.listing_listing_id === listingObj.listing_id
    ),
  };

  return newListing;
};

module.exports = convertListingForFrontEnd;
