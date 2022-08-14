const images = {
  dashboard: {
    _720: {
      src: require("./dashboard360.webp"),
      imageWidth: 360,
    },
    _1440: {
      src: require("./dashboard720.webp"),
      imageWidth: 720,
    },
    _1920: {
      src: require("./dashboard1080.webp"),
      imageWidth: 1080,
      alt: "dashboard",
    },
    aspectRatio: 360 / 332,
    loading: "eager",
  },
  boards: {
    _720: {
      src: require("./boards360.webp"),
      imageWidth: 360,
    },
    _1440: {
      src: require("./boards720.webp"),
      imageWidth: 720,
    },
    _1920: {
      src: require("./boards1080.webp"),
      imageWidth: 1080,
      alt: "boards",
    },
    aspectRatio: 360 / 332,
    loading: "eager",
  },
  chatbot: {
    _360: {
      src: require("./chatbot360.webp"),
      imageWidth: 360,
    },
    _720: {
      src: require("./chatbot720.webp"),
      imageWidth: 720,
    },
    _1080: {
      src: require("./chatbot1080.webp"),
      imageWidth: 1080,
    },
    _1440: {
      src: require("./chatbot1440.webp"),
      imageWidth: 1440,
    },
    _1920: {
      src: require("./chatbot1920.webp"),
      imageWidth: 1920,
      alt: "chatbot",
    },
    aspectRatio: 360 / 349,
    loading: "eager",
  },
};
export default images;
