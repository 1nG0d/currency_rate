import React, {Component} from 'react'
import './style.scss'
import {dateHumanReadable,daysOfWeek} from '../../../helper'
import {
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
                <div className="tbody__currency date">{dateHumanReadable(date)} ({daysOfWeek(date)})</div>
                {currencies}
            </div>
        )
    }
}

const makeMapStateToProps = () =>{
    const currencyExchangeData = createCurrencyExchangeData()
    const mapStateToProps = (state, ownProps)=> {
        return {
            quantity: quantitySelector(state),
            currencyExchangeData: currencyExchangeData(state, ownProps)
        }
    }
    return mapStateToProps
}


export default connect(makeMapStateToProps)(Trow)
