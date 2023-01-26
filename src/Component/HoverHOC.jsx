import React from 'react'
import HOC from './timer'
const HoverHOC = (props) => {
  let {val,inc}=props
  return (
    <>
        <div className="value"><h1>{val}</h1></div>
        <div className="start btn" onMouseOver={inc}><h2>Hover</h2></div>
    </>
  )
}

export default HOC(HoverHOC)