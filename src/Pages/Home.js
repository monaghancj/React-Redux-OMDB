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
    const buttonStyles = {height:'3rem', borderRadius: '2rem', margin:'.4rem .4rem 0 0', backgroundColor:'#255fbc'}
    return (    
      <div className="App">
        <Header />
        <div style={{marginTop:'5rem'}}>
          <p className="tc black-80 f1 roboto mb0">Movie Search</p>
          <p className="tc gray f3 roboto">OMDB API</p>
        </div>

        <div style={{marginTop:'10rem'}}>
          <div className="ba w-90 w-50-ns h3 center" style={{borderRadius:'2rem'}}>
            <div className="ml4">
              <input
                className="w-60 dib ba b--white h2"
                style={{height:'3.75rem'}}
                type="text"
                placeholder="Search Movies"
                onChange={e => this.onInputChange(e.target.value)}
                value={this.state.movieTitle}
              />
              <div className="dib v-mid fr w-33 pointer" style={buttonStyles} onClick={this.onSubmit}>
                <p className="tc white">Search</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt4">
          <article>
            {map(movie => (
              <a href={movie.Poster} className="fl w-50 w-25-l link overflow-hidden">
                <div role="img" aria-label={movie.Title} className="grow aspect-ratio--4x6 " style={{background: 'url(' + movie.Poster + ') no-repeat center center', backgroundSize: 'cover'}} />
              </a>
            ), this.state.movies)}
          </article>
        </div>
      </div>
    )
  }
}

export default App