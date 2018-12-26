import React, {Component} from 'react'
import {connect} from 'react-redux'

import {inputQuantityAction} from '../../ac'


class QuantityInput extends Component {
    render() {
        console.log("-------quantity input")
        return (
            <div>
                <p>Input quantity:</p>
                <input type="number"
                       onChange = {this.handleQuantityInput}
                       min="1"
                       defaultValue = "1"
                    />

            </div>
        )
    }
    handleQuantityInput = (e) => {
        e.preventDefault()
        const quantity = e.target.value
        console.log(quantity)
        const {inputQuantityAction} = this.props
        inputQuantityAction(quantity)
    }


}

export default connect((state)=>({quantity: state.quantity}),{inputQuantityAction})(QuantityInput)
