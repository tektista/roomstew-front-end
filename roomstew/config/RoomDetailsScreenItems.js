import colors from "./colors";

const RoomDetailsScreenItems = [
  {
    title: "Available:",
    roomFromDBName: "start_date",
    icon: {
      name: "calendar",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "End date",
    roomFromDBName: "end_date",
    icon: {
      name: "calendar",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Furnished",
    roomFromDBName: "room_is_furnished",
    icon: {
      name: "table-chair",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Room size",
    roomFromDBName: "room_size",
    icon: {
      name: "image-size-select-small",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "En-suite",
    roomFromDBName: "is_en_suite",
    icon: {
      name: "toilet",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Desk",
    roomFromDBName: "is_desk",
    icon: {
      name: "desk",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "Boiler in room",
    roomFromDBName: "is_boiler",
    icon: {
      name: "water-boiler",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Floor",
    roomFromDBName: "floor",
    icon: {
      name: "stairs",
      backgroundColor: colors.primary,
    },
  },
];

export default RoomDetailsScreenItems;
