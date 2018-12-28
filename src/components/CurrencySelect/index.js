import React, {Component} from 'react'
import Select from 'react-select';
import {
        selectCurrencyAction,
        getExchangeRate
        } from '../../ac'

import {connect} from 'react-redux'
import {dateNormalizer} from "../../helper/index"

const defaultOptions = [
    { value: 'USD', label: 'Долар США' },
    { value: 'EUR', label: 'Євро' }
];

class CurrencySelect extends Component {
     state = {
        option: []
    }

    componentDidMount(){
        fetch(`https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?date=${dateNormalizer(new Date())}&json`)
        .then(res => res.json())
        .then(result => {
                this.setState({option: result.map((item)=>{return {value: item.cc, label: item.txt}}).concat({value: "EUR", label:"Євро"}) })
            })
    }

    handleChange = (selectedCurrency) => {
        const {selectCurrencyAction, getExchangeRate} = this.props
        const currencyArray =[]

        selectedCurrency.forEach((currencyObj)=>currencyArray.push(currencyObj.value))
        selectCurrencyAction(currencyArray)
        getExchangeRate()
    }

    render() {
        console.log("-------select render")
        const { selectedCurrency } = this.props;
        return (
            <div>
               <p>Choose your currency:</p>
                <Select
                    value={selectedCurrency}
                    onChange={this.handleChange}
                    options={this.state.option}
                    defaultValue={defaultOptions}
                    isMulti
                    />
            </div>
        )
    }
}

export default connect((state)=>({
    currency: state.currency}),
    {selectCurrencyAction, getExchangeRate})(CurrencySelect)
