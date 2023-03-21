import colors from "./colors";

const RoomDetailsScreenItems = [
  {
    title: "Available:",
    DBFieldName: "start_date",
    icon: {
      name: "calendar",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "End date",
    DBFieldName: "end_date",
    icon: {
      name: "calendar",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Furnished",
    DBFieldName: "room_is_furnished",
    icon: {
      name: "table-chair",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Room size",
    DBFieldName: "room_size",
    icon: {
      name: "image-size-select-small",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "En-suite",
    DBFieldName: "is_en_suite",
    icon: {
      name: "toilet",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Desk",
    DBFieldName: "is_desk",
    icon: {
      name: "desk",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "Boiler in room",
    DBFieldName: "is_boiler",
    icon: {
      name: "water-boiler",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Floor",
    DBFieldName: "floor",
    icon: {
      name: "stairs",
      backgroundColor: colors.primary,
    },
  },
];

export default RoomDetailsScreenItems;
