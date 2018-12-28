import React, {Component} from 'react'
import {
        defaultRateForToday,
        } from '../../ac'

import {connect} from 'react-redux'
import Trow from './Trow'
import Thead from './Thead'
import Chart from './Chart'
import Loader from '../Loader'
import './style.scss'

const defaultCurrency = ["USD","EUR"]

class Info extends Component {

    componentDidMount(){
        const {defaultRateForToday} = this.props
        defaultRateForToday(defaultCurrency)
    }

    render() {
        console.log("-------Table")
        const {exchangeData, currency, dataLoading, dataLoaded} = this.props
        const tableRow = Object.keys(exchangeData).map(key =><Trow key={key} date={key} />);
        if ( dataLoading ) return <Loader />
        return (
            <div className="info">
                <div className="tableOfResults">
                    <Thead currencyList = {currency? currency : defaultCurrency}/>
                    <div className="Tbody">
                        {tableRow}
                    </div>
                </div>
                <div className="chart">
                    <Chart />
                </div>
            </div>

        )
    }

}

const mapStateToProps = (state) =>({
    exchangeData: state.exchangeData.entities,
    dataLoading: state.exchangeData.loading,
    dataLoaded: state.exchangeData.loaded,
    currency: state.currency
})
export default connect(mapStateToProps, {defaultRateForToday})(Info)
