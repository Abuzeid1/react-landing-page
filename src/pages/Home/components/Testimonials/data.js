import images from "./images";
const names = ["Claire Bell", "Francisco Lane", "Ralph Fisher", "Jorge Murphy"];
const texts = [
  "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days",
  "you need to work to reach your financial goal for the month and year.your financial goal for the month and year.",
  "Slate helps you see how many more days you need to work to reach your financial goal for the month and year. Slate helps you see how many more days",
  "you need to work to reach your financial goal for the month and year.",
];
const data = [
  { name: names[0], text: texts.slice(0, 2), image: images.ellipse1 },
  { name: names[1], text: texts.slice(2), image: images.ellipse2 },
  { name: names[2], text: texts.slice(2), image: images.ellipse3 },
  { name: names[3], text: texts.slice(2), image: images.ellipse4 },
];

export default data;
