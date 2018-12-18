import React, {Component} from 'react'
import './style.scss'
import {dateNormalizer, dateHumanReadable} from '../../../helper'
import {connect} from 'react-redux'


class Tbody extends Component {

    render(){
        const {date, currencyExchangeData,quantity} = this.props

        const currencies = Object.values(currencyExchangeData).map((item,i)=><div key={'currency_'+i} className="tbody__currency">{item*quantity}</div>)
        return (
            <div>
                <div className="tbody__currency date">{dateHumanReadable(date)}</div>
                {currencies}
            </div>
        )
    }


}

export default connect((state)=>({quantity: state.quantity}))(Tbody)
