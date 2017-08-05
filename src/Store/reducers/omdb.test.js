import { RECEIVE_MOVIES } from '../actions/constants'
import { Movies } from './omdb'

describe('OMDB reducer tests', () => {
  it('should load the initial state', () => {
    expect(
      Movies(undefined, {})
    ).toEqual({ movies: {} })
  })
})