import {React,PureComponent} from "react"

export default class about extends PureComponent { 
    constructor(props){ 
      super(props) 
      this.state={
        no:'1'
        }
        this.inc = this.inc.bind(this)
    } 
    inc(){
        this.setState({
            no:'Check Console Also'
        });
    }
    render(){
        console.log("Not inc. After this because of same value")
        console.log('run 1 time')
    return (
        <>
        <div className="card">
            <h1>Pure Component  </h1>
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



    