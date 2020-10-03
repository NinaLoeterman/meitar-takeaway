import axios from "axios";

const baseUrl = "http://localhost:5050";

export const postFormData = async (data) => {
  try {
    const response = await axios.post(`${baseUrl}/data`, { data: data });
    console.log(response);
    return response;
  } catch (e) {
      console.log('there was a problem sending form info', e)
  }
};
