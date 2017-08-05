const { combineReducers } = require('redux')
const omdb = require('./omdb')

const rootReducer = combineReducers({
  ...omdb
})

module.exports = rootReducer