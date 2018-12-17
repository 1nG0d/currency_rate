import React, {Component} from 'react'
import './style.scss'
import {dateNormalizer} from '../../../helper'

class Tbody extends Component {

    render() {
        const {date, currencyExchangeData} = this. props
        const currencies = Object.values(currencyExchangeData).map((item,i)=><div key={'currency_'+i} className="tbody__currency">{item}</div>)
        return (
            <div>
                <div className="tbody__currency date">{dateNormalizer(date)}</div>
                {currencies}
            </div>
        )
    }


}

export default Tbody
