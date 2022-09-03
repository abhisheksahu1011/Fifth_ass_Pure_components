import React, { PureComponent } from 'react'

export default class pureComponent extends PureComponent {
  render() {
    return (
      <div>
        <h1>{this.props.name} </h1> 
       </div>
    )
  }
}
