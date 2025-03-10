import axios from "axios";

const DOMAIN = "https://admin-startupathon.vercel.app/api";

export const getAllChallengesRequest = async () => {
  try {
    return await axios.get(`${DOMAIN}/challenges`);
  } catch (error) {
    console.error("Error fetching challenges:", error);
    throw error;
  }
};
