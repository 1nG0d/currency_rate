import React, {Component} from 'react'
import {
        defaultRateForToday,
        } from '../../ac'

import {connect} from 'react-redux'
import {dateHumanReadable} from "../../helper"


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
                <table>
                     <thead>
                        <tr>
                            <th>DATE</th>
                            <th>{dateHumanReadable(exchangeData.date)}</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$</td>
                            <td>{exchangeData.currencyExchangeData["USD"]}</td>
                        </tr>
                        <tr>
                            <td>
                                €
                            </td>
                            <td>
                                {exchangeData.currencyExchangeData["EUR"]}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        )
    }
}

const mapStateToProps = (state) =>({
    exchangeData: state.exchangeData
})
export default connect(mapStateToProps,
    {defaultRateForToday})(Info)
