import axios from "axios";
import { API_KEY_TASK } from "../../global/constants";

const loadData = async (setData) => {
  const response = await axios.get(API_KEY_TASK);
  setData(response.data);
};

export default loadData;
