import React, { Component } from 'react'

class UserGreeting extends Component {

    constructor(props) {
      super(props)
    
      this.state = {
         isLogedIn: true
      }
    }
    

  render() {

    if(this.state.isLogedIn){
        return(
            <div>Hello Jay</div>
        )
    }

    else{
        return(
            <div>Hello Guest</div>
        )
    }
    

    // return (
    //   <div>
    //     <div>Welcome Jay</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
