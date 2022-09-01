// const searchController = require('../DL/controller/searchController')
const axios = require("axios");
require("dotenv").config();

const options = {
  method: "GET",
  headers: {
    // "X-RapidAPI-Key": process.env.API_KEY,
    "X-RapidAPI-Key": "73f00cc533msh95fcea3c5e85101p1ee609jsn2ba0a9e6df67",
    "X-RapidAPI-Host": "simple-youtube-search.p.rapidapi.com",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "X-Requested-With",
  },
};

// res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Headers", "X-Requested-With");

async function search(data) {

  if (!data) throw { code: 400, msg: "func search missing data" };

  const result = await axios.get(
    encodeURI(
      `https://simple-youtube-search.p.rapidapi.com/search?query=?${data.params}&safesearch=false`
      
    ),
    options
  );

  return result.data.results;
}

module.exports = { search };
