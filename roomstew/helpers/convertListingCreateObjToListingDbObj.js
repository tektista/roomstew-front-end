const convertToListingPhotoObjList = (imageBase64DataList) => {
  const imageObjListWithOrder = imageBase64DataList.map(
    (imageBase64Data, index) => ({
      listing_photo: imageBase64Data,
      photoOrder: index,
    })
  );
  return imageObjListWithOrder;
};

const convertToRoomPhotoObjList = (imageBase64DataList) => {
  const imageObjListWithOrder = imageBase64DataList.map(
    (imageBase64Data, index) => ({
      room_photo: imageBase64Data,
      photoOrder: index,
    })
  );
  return imageObjListWithOrder;
};

const convertListingObjToDbFormat = (listingObj) => {
  //convert imageURIList to imageObjListWithOrder
  const listingPhotoObjList = convertToListingPhotoObjList(listingObj.images);

  // listing details object, with listing photo obj list
  const listingDetailsObj = {
    title: listingObj.title,
    description: listingObj.description,
    min_age: listingObj.min_age,
    max_age: listingObj.max_age,
    gender_preference: listingObj.gender_preference,
    couples_allowed: listingObj.couples_allowed,
    pets_allowed: listingObj.pets_allowed,
    smokers_allowed: listingObj.smokers_allowed,
    bills_included: listingObj.bills_included,
    internet_included: listingObj.internet_included,
    is_furnished: listingObj.is_furnished,
    has_living_room: listingObj.has_living_room,
    bathroom_count: listingObj.bathroom_count,
    has_garden: listingObj.has_garden,
    has_parking: listingObj.has_parking,
    postcode: listingObj.postcode,
    street_address: listingObj.street_address,
    city: listingObj.city,
    listing_images: listingPhotoObjList,
  };

  //list of room objects
  //each room object has a list of room image object list with order prop

  //room details list, each room object has room photo obj list
  const roomListDetailsList = listingObj.roomList.map((room) => ({
    ...room,
    room_images: convertToRoomPhotoObjList(room.room_images),
  }));

  const listingDbInFormat = [listingDetailsObj, roomListDetailsList];
  return listingDbInFormat;
};

export default convertListingObjToDbFormat;
