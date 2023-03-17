const convertRoomObjListForFrontEnd = (roomObjList) => {
  const newRoomObjList = roomObjList.map((room) => {
    // Create a new object from the room object
    const newRoom = { ...room };

    if (newRoom.hasOwnProperty("room_is_furnished")) {
      newRoom.room_is_furnished == 1
        ? (newRoom.room_is_furnished = "Yes")
        : (newRoom.room_is_furnished = "No");
    }

    if (newRoom.hasOwnProperty("is_desk")) {
      newRoom.is_desk == 1
        ? (newRoom.is_desk = "Yes")
        : (newRoom.is_desk = "No");
    }

    if (newRoom.hasOwnProperty("is_en_suite")) {
      newRoom.is_en_suite == 1
        ? (newRoom.is_en_suite = "Yes")
        : (newRoom.is_en_suite = "No");
    }

    if (newRoom.hasOwnProperty("room_size")) {
      newRoom.room_size =
        newRoom.room_size === 0 ? "Single Room" : "Double Room";
    }

    if (newRoom.hasOwnProperty("is_boiler")) {
      newRoom.is_boiler == 1
        ? (newRoom.is_boiler = "Yes")
        : (newRoom.is_boiler = "No");
    }

    if (newRoom.hasOwnProperty("start_date")) {
      const currentDate = new Date();
      const earliestDate = new Date(newRoom.start_date);

      if (earliestDate <= currentDate) {
        newRoom.start_date = "Now";
      } else {
        newRoom.start_date = earliestDate.toLocaleDateString();
      }
    }

    if (newRoom.hasOwnProperty("end_date")) {
      if (newRoom.end_date !== "No end date") {
        newRoom.end_date = new Date(newRoom.end_date).toLocaleDateString();
      }
    }

    return newRoom;
  });

  return newRoomObjList;
};

module.exports = convertRoomObjListForFrontEnd;
