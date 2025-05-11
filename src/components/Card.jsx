import React from 'react'

export default function Card(props) {
  return (
    <article>
      <img src={`https://images.tmdb.org/t/p/w500${props.poster_path}`} />
    </article>
  )
}
