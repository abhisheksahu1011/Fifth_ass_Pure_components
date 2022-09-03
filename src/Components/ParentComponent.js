import React, { Component } from 'react'
import PureComponent from './PureComponent'
// import RegComponents from './RegComponents'


export default class ParentComponent extends Component {
    constructor(){
        super();
        this.state = {names:"Javscript"}
    }

 

  render() {
    return (
      <>
      <div>
      <h1  className=" hed">
         * Pure Components✅✅✔
       </h1>
       <button className='btn' onClick={()=>{this.setState({names:"Python"})}}> Python</button>         
        <PureComponent className="btn" name={this.state.names} />
       
         
        <h3>Pure Components in React are the components which do not re-renders when the value of state and props has been updated with the same values</h3> 
         
         <h3>PureComponent Is Primarily Used for Performance Optimization.</h3>
         <h3>We can use React.memo for transforming a component into pure component</h3>
         </div>
         
    
       
      </>
    )
  }
}
