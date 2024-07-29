const colors = [
  "#56cdad",
  "#FFB836",
  "#7B61FF",
  "#FF6550",
  "#26A4FF",
  "#C86FD4",
  "#8AFF36",
  "#FF36C9",
];

export const mappingColor = (array) => {
  const colorMapping = {};

  array.forEach((item, index) => {
    colorMapping[item] = colors[index % colors.length];
  });

  return colorMapping;
};
