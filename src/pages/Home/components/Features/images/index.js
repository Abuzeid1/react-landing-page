import { ReactComponent as Restaurant } from "./restaurant-optimized.svg";
import { ReactComponent as Alien } from "./alien-optimized.svg";

import { ReactComponent as Infinity } from "./infinity-optimized.svg";
const images = {
  lineChart: {
    _720: {
      src: require("./linechart360.webp"),
      imageWidth: 360,
    },
    _1440: {
      src: require("./linechart720.webp"),
      imageWidth: 720,
    },
    _1920: {
      src: require("./linechart1080.webp"),
      imageWidth: 1080,
      alt: "chart line image",
    },
    aspectRatio: 360 / 249,
  },
  restaurant: <Restaurant />,
  alien: <Alien />,
  infinity: <Infinity />,
};

export default images;
