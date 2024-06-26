export const convertJobType = (input) => {
  const words = input.split("_");
  const capitalizedWords = words.map((word) => word.toLowerCase());
  const joinString = capitalizedWords.join(" ");
  const result = joinString.charAt(0).toUpperCase() + joinString.slice(1);
  return result;
};
