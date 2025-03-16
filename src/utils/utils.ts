export const formatPhoneNumber = (number: string) => {
  return number.replace(/(\d{3})(?=\d)/g, "$1-");
};

export const capitalizeFirstLetter = (text: string) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
