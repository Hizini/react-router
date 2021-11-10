
import React, { Component } from 'react'
import './email.scss';

class Email extends Component {

    constructor(props) {
        super(props)
        this.state = {
            // emailTail: '',
            // emailHead: '',
            // selectEmail: '',
        }
    }

    // onInputEmailHeadHandler = (e) => {
    //     this.setState({
    //         emailHead: e.target.value
    //     })
    // }

    // onInputEmailTailHandler = (e) => {
    //     this.setState({
    //         emailTail: e.target.value
    //     })
    // }

    // onSelectEmail = (e) => {
    //     if (this.state.selectEmail !== '직접입력') {
    //         this.setState({
    //             selectEmail: e.target.value,
    //             emailTail: e.target.value
    //         }
    //         )
    //     }
    // }

    render() {
        const {onInputEmailHeadHandler, onInputEmailTailHandler, onSelectEmail, emailHead, emailTail, selectEmail} = this.props
        return (
            <div className="email-container">
                <input className="emailHead" type='text' onChange={onInputEmailHeadHandler} value={emailHead} placeholder="이메일"></input>
                <span>@</span>
                <input className="emailTail" onChange={onInputEmailTailHandler} value={emailTail} type='text'></input>
                <select className="selectEmail" onChange={onSelectEmail} value={selectEmail}>
                    <option value="">직접입력</option>
                    <option value="naver.com">naver.com</option>
                    <option value="gmail.com">gmail.com</option>
                    <option value="daum.com">daum.com</option>
                    <option value="nate.com">nate.com</option>
                </select>
            </div>
        )
    }
}

export default Email