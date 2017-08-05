import React from 'react'
import { map } from 'ramda'

export default ({movies}) => {
  return (
    <article>
      {movies 
        ? map(movie => (
          <a href={movie.Poster} className="fl w-50 w-25-l link overflow-hidden">
            <div role="img" aria-label={movie.Title} className="grow aspect-ratio--4x6 " style={{background: 'url(' + movie.Poster + ') no-repeat center center', backgroundSize: 'cover'}} />
          </a>
        ), movies)
        : null
      }
    </article>
  )
}