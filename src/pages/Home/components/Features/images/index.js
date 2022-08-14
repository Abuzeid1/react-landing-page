const images = {
  lineChart: {
    _720: {
      src: require("./linechart360.webp"),
      imageWidth: "360px",
    },
    _1440: {
      src: require("./linechart720.webp"),
      imageWidth: "720px",
    },
    _1920: {
      src: require("./linechart1080.webp"),
      imageWidth: "1080px",
      alt: "chart line image",
    },
  },
  restaurant: require("./restaurant-optimized.svg").default,
  alien: require("./alien-optimized.svg").default,
  infinity: require("./infinity-optimized.svg").default,
};

export default images;
