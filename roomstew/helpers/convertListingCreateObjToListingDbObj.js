const convertToListingPhotoObjList = (imageBase64DataList) => {
  const imageObjListWithOrder = imageBase64DataList.map(
    (imageBase64Data, index) => ({
      listing_photo: imageBase64Data,
      listing_photo_order: index,
    })
  );
  return imageObjListWithOrder;
};

//convert base64 data to create object with order property
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
  // listing obj for validation in backend
  const listingDbObj = {
    title: listingObj.title,
    description: listingObj.description,
    min_age: listingObj.min_age,
    max_age: listingObj.max_age,
    gender_preference: listingObj.gender_preference,
    couples_allowed: listingObj.couples_allowed,
    pets_allowed: listingObj.pets_allowed,
    smokers_allowed: listingObj.smokers_allowed,

    building_type: listingObj.building_type,

    bills_included: listingObj.bills_included,
    internet_included: listingObj.internet_included,
    is_furnished: listingObj.is_furnished,
    has_living_room: listingObj.has_living_room,
    bathroom_count: listingObj.bathroom_count,

    has_hmo: listingObj.has_hmo,
    has_garden: listingObj.has_garden,
    has_parking: listingObj.has_parking,
    postcode: listingObj.postcode,
    street_address: listingObj.street_address,
    city: listingObj.city,
    country: listingObj.country,
  };

  const listingPhotoObjList = convertToListingPhotoObjList(listingObj.images);
  //list of room objects
  //each room object has a list of room image object listgit with order prop

  //room details list, each room object has room photo obj list
  const listingRoomListWithImages = listingObj.roomList.map((room) => ({
    ...room,
    rent: parseInt(room.rent, 10),
    room_deposit: parseInt(room.room_deposit, 10),
    roomImageList: convertToRoomPhotoObjList(room.room_images),
  }));

  const listingDbInFormat = [
    listingDbObj,
    listingPhotoObjList,
    listingRoomListWithImages,
  ];

  return listingDbInFormat;
};

export default convertListingObjToDbFormat;
