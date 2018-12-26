import React, {Component} from 'react'
import './style.scss'
import {dateHumanReadable} from '../../../helper'
import {
        currencySelector,
        quantitySelector,
        createCurrencyExchangeData
        } from '../../../selectors'


import {connect} from 'react-redux'


class Trow extends Component {

    render(){
        console.log("-------select Row render")
        const {date, quantity, currencyExchangeData} = this.props
        const currencies = Object.values(currencyExchangeData).map((item,i)=><div key={'currency_'+i} className="tbody__currency">{(item*quantity).toFixed(3)}</div>)
        return (
            <div>
                <div className="tbody__currency date">{dateHumanReadable(date)}</div>
                {currencies}
            </div>
        )
    }
}


 const mapStateToProps = (state, ownProps)=> {
    const currencyExchangeData = createCurrencyExchangeData()
    return ({
        currency: currencySelector(state),
        quantity: quantitySelector(state),
        currencyExchangeData: currencyExchangeData(state, ownProps)
    })

}

export default connect(mapStateToProps)(Trow)
