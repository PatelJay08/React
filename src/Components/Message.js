import React, { Component } from "react";

class Message extends Component{

    constructor(){
        super()
        this.state = {
            Message: 'Click Me !!'
        }
    }

    changeMassage(){
        this.setState({
            Message: 'Thanks for clicking me !'
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.Message}</h1>
                <button onClick={() => this.changeMassage()}>Click</button>
            </div>
        );
    }
}

export default Message