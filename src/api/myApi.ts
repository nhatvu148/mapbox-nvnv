import Axios from "axios";

export const getQuoteData = async () => {
  return await Axios.get("https://api.quotable.io/random");
};
