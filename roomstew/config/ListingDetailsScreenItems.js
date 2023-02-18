import colors from "../config/colors";

const ListingDetailsScreenItems = [
  {
    title: "Rooms",
    listingFromDBName: "rooms_available",
    icon: {
      name: "bed",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Furnished",
    listingFromDBName: "is_furnished",
    icon: {
      name: "table-chair",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Bills",
    listingFromDBName: "bills_included",
    icon: {
      name: "home-lightning-bolt",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Internet",
    listingFromDBName: "internet_included",
    icon: {
      name: "wifi",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Living room",
    listingFromDBName: "has_living_room",
    icon: {
      name: "sofa",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Bathrooms",
    listingFromDBName: "bathroom_count",
    icon: {
      name: "toilet",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Building type",
    listingFromDBName: "building_type",
    icon: {
      name: "office-building",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Garden",
    listingFromDBName: "has_garden",
    icon: {
      name: "grass",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Parking",
    listingFromDBName: "has_parking",
    icon: {
      name: "parking",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Age preference",
    listingFromDBName: "age_preference",
    icon: {
      name: "format-list-numbered",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Gender preference",
    listingFromDBName: "gender_preference",
    icon: {
      name: "gender-male-female",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Couples",
    listingFromDBName: "couples_allowed",
    icon: {
      name: "account-heart",
      backgroundColor: colors.primary,
    },
  },

  {
    title: "Smokers",
    listingFromDBName: "smokers_allowed",
    icon: {
      name: "cigar",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "Pets",
    listingFromDBName: "pets_allowed",
    icon: {
      name: "dog-side",
      backgroundColor: colors.primary,
    },
  },
];

export default ListingDetailsScreenItems;
