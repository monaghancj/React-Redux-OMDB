const { apiUrl } = require('../config')
const fetch = require('isomorphic-fetch')

module.exports = {
  getMovies
}

function getMovies (movieTitle) {
  return fetch(`${apiUrl}?s=${movieTitle}&r=json`, {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      // 'Authorization': `Bearer ${getIdToken()}`
    }
  })
    .then(response => response.json())
    .catch(err => console.log(err))
}