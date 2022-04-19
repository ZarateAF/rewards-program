import axios from "axios";

export const getRecordedPurchase = async () => {
  const { data } = await axios.get(
    "https://mocki.io/v1/c6d8338f-e2a3-4641-8266-cd90c5e4cf09"
  );
  return data;
};
