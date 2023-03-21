import colors from "../config/colors";

const ListingDetailsScreenItems = [
  {
    title: "Rooms available",
    DBFieldName: "numRoomsAvailable",
    icon: {
      name: "bed",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Furnished",
    DBFieldName: "is_furnished",
    icon: {
      name: "table-chair",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Bills",
    DBFieldName: "bills_included",
    icon: {
      name: "home-lightning-bolt",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Internet",
    DBFieldName: "internet_included",
    icon: {
      name: "wifi",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Living room",
    DBFieldName: "has_living_room",
    icon: {
      name: "sofa",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Bathrooms",
    DBFieldName: "bathroom_count",
    icon: {
      name: "toilet",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Building type",
    DBFieldName: "building_type",
    icon: {
      name: "office-building",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Garden",
    DBFieldName: "has_garden",
    icon: {
      name: "grass",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Parking",
    DBFieldName: "has_parking",
    icon: {
      name: "parking",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Age preference",
    DBFieldName: "age_preference",
    icon: {
      name: "format-list-numbered",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Gender preference",
    DBFieldName: "gender_preference",
    icon: {
      name: "gender-male-female",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Couples",
    DBFieldName: "couples_allowed",
    icon: {
      name: "account-heart",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "Smokers",
    DBFieldName: "smokers_allowed",
    icon: {
      name: "cigar",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Pets",
    DBFieldName: "pets_allowed",
    icon: {
      name: "dog-side",
      backgroundColor: colors.primary,
    },
  },
];

export default ListingDetailsScreenItems;
