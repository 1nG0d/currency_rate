import React, {Component} from 'react'
import {
        defaultRateForToday,
        } from '../../ac'

import {connect} from 'react-redux'
import {dateNormalizer} from "../../helper"
import {Map} from 'immutable'

const defaultCurrency = ["USD","EUR"]

class Info extends Component {

    componentDidMount(){
        const {defaultRateForToday} = this.props
        defaultRateForToday(defaultCurrency)
    }

    render() {
        const {result,currency,quantity,exchangeDate} = this.props
        console.log(exchangeDate[0])
        return (
            <div>
                <p>Result is: {result} UAH for {quantity} {currency === "USD" ? "$" : "€"}</p>
                <table>
                     <thead>
                        <tr>
                            <th></th>
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
    exchangeDate: state.exchangeDate
})
export default connect(mapStateToProps,
    {defaultRateForToday})
    (Info)
