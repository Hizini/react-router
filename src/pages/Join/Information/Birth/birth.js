
import React, { Component } from 'react'
import './birth.scss';

class Birth extends Component {

    constructor(props) {
        super(props)
        this.state = {
            year: '',
            month: '',
            day: '',
        }
    }

    onInputYearHandler = (e) => {
        this.setState({
            year: e.target.value
        })
    }

    onInputMonthHandler = (e) => {
        this.setState({
            month: e.target.value
        })
    }

    onInputDayHandler = (e) => {
        this.setState({
            day: e.target.value
        })
    }

    render() {
        const { year, month, day } = this.state
        return (
            <div className="birth-container">
                <input className="year" type="text" onChange={this.onInputYearHandler} value={year} placeholder="생년 (yyyy)" maxLength="4" ></input>
                <input className="month" type="text" onChange={this.onInputMonthHandler} value={month} placeholder="월 (mm)" maxLength="2" ></input>
                <input className="day" type="text" onChange={this.onInputDayHandler} value={day} placeholder="일 (dd)" maxLength="2" ></input>
            </div>
        )
    }
}

export default Birth