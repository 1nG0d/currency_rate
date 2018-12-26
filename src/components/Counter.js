import React, {Component} from 'react'
import {connect} from 'react-redux'
import {increment} from "../ac/index"

class Counter extends Component {


    handleIncrement = () => {
        const {increment} = this.props
        increment()
    }

    render() {
        const {counter} = this.props
        return (
            <div className="">
                {counter}
                <button onClick={this.handleIncrement}>Add</button>
            </div>
        )
    }
}

export default connect((state)=>({counter: state.increment}), {increment} )(Counter)