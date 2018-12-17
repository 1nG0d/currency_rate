import React, {Component} from 'react'
import {
        defaultRateForToday,
        } from '../../ac'

import {connect} from 'react-redux'
// eslint-disable-next-line
import {dateHumanReadable} from "../../helper"
import Tbody from './Tbody'
import Thead from './Thead'


const defaultCurrency = ["USD","EUR"]

class Info extends Component {

    componentDidMount(){
        const {defaultRateForToday} = this.props
        defaultRateForToday(defaultCurrency)
    }

    render() {
        const {exchangeData, currency} = this.props
        return (
            <div className="tableOfResults">
                    <Thead currencyList = {currency? currency : defaultCurrency}/>
                    <Tbody date={exchangeData.date} currencyExchangeData={exchangeData.currencyExchangeData}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    exchangeData: state.exchangeData,
    currency: state.currency
})
export default connect(mapStateToProps,
    {defaultRateForToday})(Info)
