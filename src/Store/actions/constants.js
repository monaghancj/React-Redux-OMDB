module.exports = ['RECEIVE_MOVIES'].reduce((mem,curr) => {
    mem[curr] = curr
    return mem
  }, {})