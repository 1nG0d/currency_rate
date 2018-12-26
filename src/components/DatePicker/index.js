import React from 'react';
import Helmet from 'react-helmet';
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

import {connect} from 'react-redux'
import {selectDateAction,getExchangeRate} from "../../ac"


class PickDate extends React.Component {

    static defaultProps = {
        numberOfMonths: 2
    };
    constructor(props) {
        super(props);
        this.state = this.getInitialState();
    }
    getInitialState() {
        return {
            from: undefined,
            to: undefined
        };
    }
    handleDayClick = (day)=> {
        const range = DateUtils.addDayToRange(day, this.state);
        const {selectDateAction, getExchangeRate } = this.props
        this.setState(range)
        selectDateAction(range)
        getExchangeRate()
    }
    handleResetClick = ()=> {
        this.setState(this.getInitialState());
    }
    render() {
        console.log("-------data picker")
        const { from, to } = this.state;
        const modifiers = { start: from, end: to };
        return (
            <div className="PickDate">
                <p>
                    {!from && !to && 'Please select the first day.'}
                    {from && !to && 'Please select the last day.'}
                    {from &&
                    to &&
                    `Selected from ${from.toLocaleDateString()} to
                    ${to.toLocaleDateString()}`}{' '}
                    {from &&
                    to && (
                        <button className="link" onClick={this.handleResetClick}>
                            Reset
                        </button>
                    )}
                </p>
                <DayPicker
                    className="Selectable"
                    numberOfMonths={this.props.numberOfMonths}
                    selectedDays={[from, { from, to }]}
                    modifiers={modifiers}
                    onDayClick={this.handleDayClick}
                    disabledDays={[
                        {
                          after: new Date()
                        }
                    ]}
                    />
                <Helmet>
                    <style>{`
                          .Selectable .DayPicker-Day--selected:not(.DayPicker-Day--start):not(.DayPicker-Day--end):not(.DayPicker-Day--outside) {
                            background-color: #f0f8ff !important;
                            color: #4a90e2;
                          }
                          .Selectable .DayPicker-Day {
                            border-radius: 0 !important;
                          }
                          .Selectable .DayPicker-Day--start {
                            border-top-left-radius: 50% !important;
                            border-bottom-left-radius: 50% !important;
                          }
                          .Selectable .DayPicker-Day--end {
                            border-top-right-radius: 50% !important;
                            border-bottom-right-radius: 50% !important;
                          }
                `}</style>
                </Helmet>
            </div>
        );
    }
}
export default connect(null,{selectDateAction,getExchangeRate})(PickDate)