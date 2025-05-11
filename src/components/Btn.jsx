import React from 'react'

export default function Btn(props) {
  console.log(props)
  return (
    <button onClick={props.handelClick}>{props.label}</button>
  )
}

