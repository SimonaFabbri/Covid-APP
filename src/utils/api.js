import axios from "axios";

// GET THE DATA FOR ALL THE STATES
export const getGlobal = async () => {
  const res = await query();
  return res;
};

// GET THE DATA FOR A SINGLE STATE PASSING THE TWO LETTER CODE
export const getState = async (stateCode) => {
  const res = await query(stateCode);
  return res;
};

// QUERY THE COVIDTRACKING.COM API
const query = async (stateCode) => {
  const code = stateCode ? "states" : "us";

  const results = await axios.get(
    `https://api.covidtracking.com/v1/${code}/daily.json`
  );

  let data = results.data;

  if (stateCode) {
    const stateData = data.filter((item) => item.state === stateCode);
    return stateData.reverse();
  }

  return data.reverse();
};
