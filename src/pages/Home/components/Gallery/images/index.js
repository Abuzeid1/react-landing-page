const images = {
  drone: {
    _360: {
      src: require("./drone360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./drone720.webp"),
      imageWidth: 720,
      alt: "drone",
    },
    aspectRatio: 360 / 467,
  },
  ipad: {
    _360: {
      src: require("./ipad360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./ipad720.webp"),
      imageWidth: 720,
      alt: "ipad",
    },
    aspectRatio: 360 / 240,
  },
  meeting: {
    _360: {
      src: require("./meeting360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./meeting720.webp"),
      imageWidth: 720,
      alt: "meeting",
    },
    aspectRatio: 360 / 240,
  },
  imac: {
    _360: {
      src: require("./imac360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./imac720.webp"),
      imageWidth: 720,
      alt: "imac",
    },
    aspectRatio: 360 / 240,
  },
  macbook: {
    _360: {
      src: require("./macbook360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./macbook720.webp"),
      imageWidth: 720,
      alt: "macbook",
    },
    aspectRatio: 360 / 241,
  },
  notebook: {
    _360: {
      src: require("./notebook360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./notebook720.webp"),
      imageWidth: 720,
      alt: "notebook",
    },
    aspectRatio: 360 / 241,
  },
  camera: {
    _360: {
      src: require("./camera360.webp"),
      imageWidth: 360,
    },
    _1920: {
      src: require("./camera720.webp"),
      imageWidth: 720,
      alt: "camera",
    },
    aspectRatio: 360 / 241,
  },
};

export default images;
