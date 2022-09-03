import React, { Component } from 'react'
import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';

class HigherOrder extends  Component {
   

  render() {
    return (
      <div>
     
      <h1 className="hed">
      * Higher Order Functions ❔
      </h1>
      
      <li>A higher-order component (HOC) is an advanced technique in React for reusing component logic</li>
      <li>HOCs are not part of the React API,They are a pattern that emerges from React’s compositional nature.</li>
      <li>A higher-order component is a function that takes a component and returns a new component</li><br />
      

   

            <ClickCounter/>  <br />
            <HoverCounter/> <br />
            <h2>
   * Reason to use Higher-Order component:
   </h2>
     <li>Easy to handle</li>
     <li>Get rid of copying the same logic in every component</li>
      <br />
      </div>
    )
  }
}

export default HigherOrder;
