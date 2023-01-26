import React, { Component } from 'react'
// import Navbar from "./Component/navbar"

export default class Home extends Component{
    constructor(){ 
        super() 
        this.state={
            no:1
        }
        this.inc = this.inc.bind(this)
      } 
      inc(){
          this.setState({no:'Check Console Also'})
      }
      render(){
        console.log(`inc. & Conti. `)
        return (
            <>
                <div className="card">
                    <h1>Normal Component  </h1>
                    <p>Click Start button Multiple time</p>
                    <div className="card main flex">
                        <div className="value"><h1>{this.state.no}</h1></div>
                        <div className="start btn" onClick={this.inc}><h2>Start</h2></div>
                    </div>
                </div>
            </>
        )
    }
}


