import React from 'react'
import HOC from './timer'
const ClickHOC = (props) => {
  let {val,inc}=props
  return (
    <>
        <div className="value"><h1>{val}</h1></div>
        <div className="start btn" onClick={inc}><h2>Click</h2></div>
    </>
  )
}

export default HOC(ClickHOC)