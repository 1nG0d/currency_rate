import React, {Component} from 'react'
import './style.scss'
import {dateHumanReadable} from '../../../helper'
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

export default connect((state, ownProps)=> {

    const currencyArray = state.currency;
    let result = [];
    if (state.exchangeData[ownProps.date].length > 0 ){
        const tmpArr = state.exchangeData[ownProps.date];
        const obj = tmpArr.reduce(function(acc, cur, i) {
            acc[cur.cc] = cur;
            return acc;
        }, {});
        result = currencyArray.map((currency) => obj[currency].rate )
    }
    return ({
        currency: state.currency,
        quantity: state.quantity,
        currencyExchangeData: result
    })

})(Trow)
