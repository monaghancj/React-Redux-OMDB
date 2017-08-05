import React, { Component } from 'react'
import { getMovies } from '../Services/omdb'
import Header from '../Components/Header'
import { path, map } from 'ramda'

class App extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      movieTitle: '',
      movies: []
    }
  }
  onInputChange(movieTitle) {
    this.setState({movieTitle})
  }
  async onSubmit() {
    const response = await getMovies(this.state.movieTitle)
    const movies = path(['data','Search'], response)
    console.log('movies', movies)
    this.setState({movies})

  }
  render() {
    const buttonStyles = {height:'3rem', borderRadius: '2rem', margin:'.4rem .4rem 0 0'}
    const poster = movie => `background: url(${movie.Poster}) no-repeat center center; background-size: cover;`
    return (    
      <div className="App">
        <Header />
        <div className="mt4">
          <div className="ba w-90 w-50-ns h3 center" style={{borderRadius:'2rem'}}>
            <div className="ml4">
              <input
                className="dib ba b--white h2"
                style={{height:'3.75rem'}}
                type="text"
                placeholder="Search Movies"
                onChange={e => this.onInputChange(e.target.value)}
                value={this.state.movieTitle}
              />
              <div className="dib bg-green v-mid fr w-33 pointer" style={buttonStyles} onClick={this.onSubmit}>
                <p className="tc white">Search</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-70 center">
          {map(movie => (
            <img src={movie.Poster} key={movie.Title}/>
          ), this.state.movies)}
        </div>
      </div>
    )
  }
}

export default App