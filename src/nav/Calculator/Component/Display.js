import React, { Component } from 'react'
import './Display.css';

class Display extends Component {
    render() {
        const { value } = this.props
        return (
            <>
                <div className="display">
                    <div className="displayResult">
                        {value}
                    </div>
                </div>
            </>
        )
    }
}

export default Display