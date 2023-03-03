import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class ParentComponent extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         parentname: 'Parent'
      }

      this.greetparent = this.greetparent.bind(this)

    }

    greetparent(child) {
        alert(`Hello ${this.state.parentname} from ${child}`)
    }
    

    render() {
    return (
      <div>
        <ChildComponent greethandler={this.greetparent} />
      </div>
    )
  }
}

export default ParentComponent
