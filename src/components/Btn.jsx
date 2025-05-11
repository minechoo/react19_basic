import React from 'react'

export default function Btn({label, handelClick}) {

  const defaultOpt = {label: "button", handelClick: null}
  // if(!label) label = defaultOpt.label
  // if(!handelClick) handelClick = defaultOpt.handelClick
  return (
    <button onClick={handelClick ? handelClick : defaultOpt.handelClick}>{label ? label : defaultOpt.label}</button>
  )
}

