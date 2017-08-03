import React, { Component } from 'react'
import { getMovies } from '../Services/omdb'
import Header from '../Components/Header'

class App extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)

    this.state = {
      movieTitle: ''
    }
  }
  onInputChange(movieTitle) {
    this.setState({movieTitle})
  }
  async onSubmit() {
      const movies = await getMovies(this.state.movieTitle)
      console.log('movies', movies)
  }
  render() {
    const buttonStyles = {height:'3rem', borderRadius: '2rem', margin:'.4rem .4rem 0 0'}
    return (    
      <div className="App">
        <Header />
        <div className="mt4">
          <div className="ba w-50 h3 center" style={{borderRadius:'2rem'}}>
            <div className="ml4">
              <input
                className="dib ba b--white h2"
                style={{height:'3.75rem'}}
                type="text"
                placeholder="Search Movies"
                onChange={e => this.onInputChange(e.target.value)}
                value={this.state.movieTitle}
              />
              <div className="dib bg-green v-mid fr w-33" style={buttonStyles} onClick={this.onSubmit}>
                <p className="tc white">Search</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App