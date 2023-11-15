import axios from "axios";
import { urlToUrlWithoutFlightMarker } from "next/dist/client/components/app-router";

const baseUrl = "http://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const response = await axios.get(url, {
    headers: {
      "X-RapidAPI-Key": "1b5dda3dfemsh130b5a017dc48d6p1c98bdjsnbf8a8acc4856",
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
    },
  });
};
