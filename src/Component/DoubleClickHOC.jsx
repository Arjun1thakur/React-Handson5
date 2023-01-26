import React from 'react'
import HOC from './timer'
const DoubleClickHOC = (props) => {
  let {val,inc}=props
  return (
    <>
        <div className="value"><h1>{val}</h1></div>
        <div className="start btn" onDoubleClick={inc}><h2>Double-click</h2></div>
    </>
    )
}

export default HOC(DoubleClickHOC)