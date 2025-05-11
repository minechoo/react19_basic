import React from 'react'

export default function Card({name, age}) {
  return (
    <article>
      <h1>name: {name}</h1>
      <p>age: {age}</p>
    </article>
  )
}
