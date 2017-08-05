const { RECEIVE_MOVIES } = require('../actions').constants

const Movies = (state = {
  movies: {}
}, action) => {
  switch(action.type) {
    case RECEIVE_MOVIES:
      return Object.assign({}, state, {
        movies: action.movies 
      })
    default:
      return state
  }
}

module.exports = { Movies }