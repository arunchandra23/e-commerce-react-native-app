const getProductByIdReducer = (
  state = {
    id: 4,
    title: "Sword Fish",
    price: 109.95,
    description:
      "Swordfish are commonly known as broadbills and are the only species in the Xiphiidae family. They are large predatory fish that migrate as the seasons change. They are popular sports fish and have elongated round bodies. They thrive in the temperate and tropical regions of the Indian, Pacific, and Atlantic Ocean.",
    category: "fish",
    image:
      "https://res.cloudinary.com/dptwgnj8t/image/upload/v1662719455/sword-fish-june232020-min-1122x748.jpg_e3mc22.webp",
    rating: {
      rate: 3.9,
      count: 120,
    },
  },
  action
) => {
  switch (action.type) {
    case "GET_PRODUCT_BY_ID":
      return action.payload;

    default:
      return state;
  }
};

export default getProductByIdReducer;
