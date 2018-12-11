import React, {Component} from 'react'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment'
import {selectDateAction} from '../../ac'

import {connect} from 'react-redux'


class PickDate extends Component {

    handleChange = (date) => {
        const {selectDateAction} = this.props
        console.log(moment(date).format('L'));
        selectDateAction(date)
    }

    render() {
        const {selectedDate} = this.props
        return ( <div>
                <p>Choose Date:</p>
                <DatePicker
                    selected={selectedDate}
                    onChange={this.handleChange}
                    tabIndex={1}
                    defaultValue={selectedDate[0]}
                    />
            </div>

        )
    }



}

export default connect(state=>({selectedDate: state.selectedDate}),{selectDateAction})(PickDate)
