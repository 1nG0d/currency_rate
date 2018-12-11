import React, {Component} from 'react'
import Select from 'react-select';
import {selectCurrencyAction} from '../../ac'

import {connect} from 'react-redux'


const options = [
    { value: 'USD', label: 'USD' },
    { value: 'EUR', label: 'EUR' }
];

class CurrencySelect extends Component {
    handleChange = (selectedCurrency) => {

        const {selectCurrencyAction} = this.props

        const currencyArray =[]
        selectedCurrency.forEach((currencyObj)=>currencyArray.push(currencyObj.value))

        console.log("trrr",currencyArray)
        selectCurrencyAction( currencyArray)
    }

    render() {
        const { selectedCurrency } = this.props;

        return (
            <div>
               <p>Choose your currency:</p>
                <Select
                    value={selectedCurrency}
                    onChange={this.handleChange}
                    options={options}
                    defaultValue={options[0]}
                    isMulti
                    />
            </div>
        )
    }
}

export default connect((state)=>({
    currency: state.currency}),
    {selectCurrencyAction})(CurrencySelect)
