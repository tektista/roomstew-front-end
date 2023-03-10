//adds order to imageList and changes prop names
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
      room_photo_order: index,
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
  //each room object has a list of room image object list
  const listingRoomListWithPhotoList = listingObj.roomList.map(
    ({ roomImageList, ...room }) => [
      {
        ...room,
        rent: parseInt(room.rent, 10),
        deposit: parseInt(room.room_deposit, 10),
      },
      convertToRoomPhotoObjList(roomImageList),
    ]
  );

  const listingDbInFormat = [
    listingDbObj,
    listingPhotoObjList,
    listingRoomListWithPhotoList,
  ];

  return listingDbInFormat;
};

export default convertListingObjToDbFormat;
