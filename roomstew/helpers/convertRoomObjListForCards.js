const convertRoomObjListForCards = (roomObjList) => {
  const newRoomObjList = roomObjList.map((room) => {
    // Create a new object from the room object
    const newRoom = { ...room };

    if (newRoom.hasOwnProperty("room_is_furnished")) {
      newRoom.room_is_furnished == 1
        ? (newRoom.room_is_furnished = "Furnished")
        : (newRoom.room_is_furnished = "Unfurnished");
    }

    if (newRoom.hasOwnProperty("is_en_suite")) {
      newRoom.is_en_suite == 1
        ? (newRoom.is_en_suite = "En-suite")
        : (newRoom.is_en_suite = "No en-suite");
    }

    if (newRoom.hasOwnProperty("room_size")) {
      newRoom.room_size =
        newRoom.room_size === 0 ? "Single Room" : "Double Room";
    }

    // Card Listings
    if (newRoom.hasOwnProperty("start_date")) {
      const currentDate = new Date();
      const earliestDate = new Date(newRoom.start_date);

      if (earliestDate <= currentDate) {
        newRoom.start_date = "Now";
      } else {
        newRoom.start_date = earliestDate.toLocaleDateString();
      }
    }

    return newRoom; // Add this line to return the newRoom object
  });

  return newRoomObjList;
};

module.exports = convertRoomObjListForCards;
