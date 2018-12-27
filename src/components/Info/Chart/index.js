import React, {Component} from 'react'
import {dateHumanReadable} from '../../../helper'
import {dataForChartSelector} from '../../../selectors'

import {connect} from "react-redux"

import C3Chart from 'react-c3js';
import 'c3/c3.css';


const dataDefault = {
    type: "bar",
    x: "x",
    columns: [
        ["x", "2018-12-27","2018-12-28"],
        ['USD', 27.268, 26.000],
        ['EUR', 31.107, 31.000]
    ]
};
const axis = {
    x : {
        type : 'timeseries',
            tick: {
            format: function (x) { return dateHumanReadable(x); }
            //format: '%Y' // format string is also available for timeseries data
        }
    }
}

class Chart extends Component {

    render() {
        const {dataForChart} = this.props
        console.log("!!!dataForChart: ", dataForChart)
        return <C3Chart data={dataDefault} axis={axis}/>
    }

}

const mapStateToProps = (state) =>({
        dataForChart: dataForChartSelector(state)
    })

export default connect(mapStateToProps)(Chart)