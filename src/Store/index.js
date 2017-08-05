const { createStore, applyMiddleware, compose } = require('redux')
const thunk = require('redux-thunk').default
const rootReducer = require('./reducers')

const composeWithDevTools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeWithDevTools(
  applyMiddleware(thunk)
))

module.exports = store