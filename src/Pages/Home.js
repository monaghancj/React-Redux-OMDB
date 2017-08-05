import React, { Component } from 'react'
import Header from '../Components/Header'
import Table from '../Components/Table'
import { path } from 'ramda'
import { connect } from 'react-redux'
import { fetchMovies } from '../Store/actions/omdb'

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
  onSubmit() {
    this.props.dispatch(fetchMovies(this.state.movieTitle))
  }
  render() {
    const notFoundMessage = () => <p className="tc">Movie Not Found, try again!</p>
    const movies = path(['Movies','movies','data','Search'],this.props)
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
          <Table movies={movies} />
          {path(['Movies','movies','data','Response'],this.props) === "False" 
            ? notFoundMessage()
            : null }
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { Movies } = state
  return { Movies }
}

export default connect(mapStateToProps)(App)