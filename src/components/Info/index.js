import React, {Component} from 'react'
import {
        defaultRateForToday,
        } from '../../ac'

import {connect} from 'react-redux'
import {dateHumanReadable} from "../../helper"
import Thead from './thead'


const defaultCurrency = ["USD","EUR"]

class Info extends Component {

    componentDidMount(){
        const {defaultRateForToday} = this.props
        defaultRateForToday(defaultCurrency)
    }

    render() {
        const {exchangeData} = this.props
        return (
            <div className="tableOfResults">
                    <Thead currencyList = {defaultCurrency}/>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    exchangeData: state.exchangeData
})
export default connect(mapStateToProps,
    {defaultRateForToday})(Info)
