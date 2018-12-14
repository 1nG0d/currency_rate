import React, {Component} from 'react'
import {
        defaultRateForToday,
        } from '../../ac'

import {connect} from 'react-redux'
import {dateNormalizer} from "../../helper"
import {Map} from 'immutable'

const defaultCurrency = ["USD","EUR"];

class Info extends Component {

    componentDidMount(){
        // or use Promise.all, in action. Depends on your plans and architecture.
        defaultCurrency.forEach(currency => this.props.defaultRateForToday(currency));
    }

    render() {
        const {result,currency,quantity,exchangeData} = this.props
        console.log("data in component:",exchangeData.date)
        console.log("currencyExchangeData in component:",exchangeData.currencyExchangeData)
        return (
            <div>
                <p>Result is: {result} UAH for {quantity} {currency === "USD" ? "$" : "€"}</p>
                <table>
                     <thead>
                        <tr>
                            <th>DATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>$</td>
                            <td>ex1</td>
                        </tr>
                        <tr>
                            <td>
                                €
                            </td>
                            <td>
                            ex2
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
    {defaultRateForToday})
    (Info)
