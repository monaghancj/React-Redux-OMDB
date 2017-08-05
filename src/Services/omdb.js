const { apiUrl, apiKey } = require('../config')
const axios = require('axios')

module.exports = {
  getMovies
}

function getMovies (movieTitle) {
  return axios.get(`${apiUrl}?s=${movieTitle}&r=json&apikey=${apiKey}`)
}
