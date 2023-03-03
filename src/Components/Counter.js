import React, { Component } from 'react'

class Counter extends Component {


    constructor(props) {
        super(props)

        this.state = {
            count: 0
        }
    }

    increament() {
        this.setState({
            count: this.state.count + 1
        }, () => { console.log('callback value ', this.state.count); })

        console.log(this.state.count);

    }


    render() {
        return (
            <div>

                <div>
                    Counter - {this.state.count}
                </div>
                <button onClick={() => this.increament()}>Increment</button>
            </div>
        )
    }
}

export default Counter
