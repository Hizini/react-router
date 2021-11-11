
import React, { Component } from 'react'
import './join.scss';

import Title from './Title/title';
import Information from './Information/information';
import Agree from './Agree/agree';
import axios from "axios";

class Join extends Component {

    constructor(props) {
        super(props)
        this.state = {
            EveryChecked: false,
            MarketingEveryChecked: false,
            conditionChecked: false,
            personalChecked: false,
            personalChecked2: false,
            EmailChecked: false,
            SMSChecked: false,
            AppChecked: false,
            name: '',
            id: '',
            password: '',
            checkPassword: '',
            passwordMessage: '',
            year: '',
            month: '',
            day: '',
            emailTail: '',
            emailHead: '',
            selectEmail: '',
            man: '',
            woman: '',
            isGender: '남자',
        }
    }

    handleOnChangeCheckBox = e => {
        this.setState({
            [e.target.value]: !this.state[e.target.value]
        }, () => this.setState({ EveryChecked: this.checkAllBooleanValue() }))
    }

    handleOnChangeMarketingCheckBox = e => {
        this.setState({
            [e.target.value]: !this.state[e.target.value]
        }, () => this.setState({ MarketingEveryChecked: this.checkMarketingBooleanValue(), EveryChecked: this.checkAllBooleanValue() }))
    }

    handleEveryCheck = (e) => {
        const { EveryChecked } = this.state
        this.setState({
            EveryChecked: !this.state.EveryChecked,
        })

        if (EveryChecked) {
            // this.child.current.setAllCheckBoxValue(false)  // 이런게 있다! 라고만 아시면 됩니다 ^^
            this.setState({
                conditionChecked: false,
                personalChecked: false,
                personalChecked2: false,
                EmailChecked: false,
                SMSChecked: false,
                AppChecked: false,
                MarketingEveryChecked: false
            })
        }
        else {
            // this.child.current.setAllCheckBoxValue(true)  // 이런게 있다! 라고만 아시면 됩니다 ^^
            this.setState({
                conditionChecked: true,
                personalChecked: true,
                personalChecked2: true,
                EmailChecked: true,
                SMSChecked: true,
                AppChecked: true,
                MarketingEveryChecked: true
            })
        }
    }

    handleMarketingEveryCheck = (e) => {
        this.setState({
            MarketingEveryChecked: !this.state.MarketingEveryChecked,
        }, () => this.setState({ EveryChecked: this.checkAllBooleanValue() }))

        if (this.state.MarketingEveryChecked) {
            this.setState({
                EmailChecked: false,
                SMSChecked: false,
                AppChecked: false,

            })
        }
        else {
            this.setState({
                EmailChecked: true,
                SMSChecked: true,
                AppChecked: true,
            })
        }
    }

    checkAllBooleanValue = () => {
        const { conditionChecked, personalChecked, personalChecked2, EmailChecked, SMSChecked, AppChecked } = this.state

        return conditionChecked && personalChecked && personalChecked2 && EmailChecked && SMSChecked && AppChecked
    }

    checkMarketingBooleanValue = () => {
        const { EmailChecked, SMSChecked, AppChecked } = this.state

        return EmailChecked && SMSChecked && AppChecked
    }

    onInputNameHandler = (e) => {
        this.setState({
            name: e.target.value
        })
    }

    onInputIdHandler = (e) => {
        this.setState({
            id: e.target.value
        })
    }

    onInputPasswordHandler = (e) => {
        this.setState({
            password: e.target.value
        })
    }

    onInputCheckedPasswordHandler = (e) => {
        this.setState({
            checkPassword: e.target.value
        })
    }

    onInputEmailHeadHandler = (e) => {
        this.setState({
            emailHead: e.target.value
        })
    }

    onInputEmailTailHandler = (e) => {
        this.setState({
            emailTail: e.target.value
        })
    }

    onSelectEmail = (e) => {
        if (this.state.selectEmail !== '직접입력') {
            this.setState({
                selectEmail: e.target.value,
                emailTail: e.target.value
            }
            )
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

    handleTop = (e) => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    onClickFinishBtn = (e) => {
        const { name, id, password, checkPassword, emailTail, emailHead, year, month, day, isGender, conditionChecked, personalChecked, personalChecked2, EmailChecked, SMSChecked, AppChecked, EveryChecked } = this.state
        // if ((name || id || password || emailTail || emailHead || year || month || day === '') 
        //     && (EveryChecked === false)) {
        //     alert(`필수항목을 입력하세요.`)
        // }
        if (!name) {
            alert('이름을 입력해주세요.')
        }
        else if (!id) {
            alert('아이디를 입력해주세요.')
        }
        else if (!password) {
            alert('비밀번호를 입력해주세요.')
        }
        else if (password !== checkPassword) {
            alert('비밀번호가 일치하지 않습니다.')
        }
        else if (!emailHead || !emailTail) {
            alert('이메일을 입력해주세요.')
        }
        else if (!year || !month || !day) {
            alert('생년월일을 입력해주세요.')
        }
        else if (!conditionChecked) {
            alert('이용약관을 체크해주세요')
        }
        else if (!personalChecked) {
            alert('개인정보 수집 및 이용 안내를 체크해주세요')
        }
        else if (!personalChecked2) {
            alert('개인정보 처리위탁을 체크해주세요')
        }
        else if (!EmailChecked) {
            alert('이메일 수신동의에 체크해주세요')
        }
        else if (!SMSChecked) {
            alert('SMS 수신동의에 체크해주세요')
        }
        else if (!AppChecked) {
            alert('앱PUSH알림을 체크해주세요')
        }
        // else {
        //     alert(`
        // 이름 : ${name}
        // 아이디 : ${id}
        // 비밀번호 : ${password}
        // 이메일 : ${emailHead} @ ${emailTail}
        // 생년월일 : ${year}년 ${month}월 ${day}일
        // 성별 : ${isGender}
        // 이용약관 : ${conditionChecked}
        // 개인정보 수집 및 이용 안내 : ${personalChecked}
        // 개인정보 처리위탁 : ${personalChecked2}
        // 이메일 : ${EmailChecked}
        // SMS : ${SMSChecked}
        // 앱PUSH알림 : ${AppChecked}`)
            this.props.history.push('/')
        // }
        const body = {
            name,
            id,
            password,
            email: `${emailHead}@${emailTail}`,
            birth: `${year}-${month}-${day}`,
            gender: isGender,
            conditionChecked,
            personalChecked,
            personalChecked2,
            emailChecked: EmailChecked,
            smsChecked: SMSChecked,
            appChecked: AppChecked
        }

        axios.post('http://localhost:2008/api/auth/sign-up', body)
            .then(response => { console.log(response) })
            .catch(error => {
                console.log(error)
                alert('Unknown Error...')

            })
    }

    // setAllBooleanValue = value => {
    //     this.setState({
    //         conditionChecked: value,
    //         personalChecked: value
    //     })
    // }

    handleClickGender = value => {
        this.setState({ isGender: value })
    }

    render() {
        const { conditionChecked, personalChecked, personalChecked2, EmailChecked, SMSChecked, AppChecked, name, id, password, checkPassword, MarketingEveryChecked, EveryChecked,
            emailTail, emailHead, selectEmail, year, month, day, man, woman, isGender, manBgColor, womanBgColor, manColor, womanColor } = this.state
        return (
            <div className="join-container">
                <Title />
                <Information
                    name={name}
                    id={id}
                    password={password}
                    checkPassword={checkPassword}
                    emailTail={emailTail}
                    emailHead={emailHead}
                    selectEmail={selectEmail}
                    year={year}
                    month={month}
                    day={day}
                    man={man}
                    woman={woman}
                    isGender={isGender}
                    manBgColor={manBgColor}
                    womanBgColor={womanBgColor}
                    manColor={manColor}
                    womanColor={womanColor}
                    onInputNameHandler={this.onInputNameHandler}
                    onInputIdHandler={this.onInputIdHandler}
                    onInputPasswordHandler={this.onInputPasswordHandler}
                    onInputCheckedPasswordHandler={this.onInputCheckedPasswordHandler}
                    onInputEmailHeadHandler={this.onInputEmailHeadHandler}
                    onInputEmailTailHandler={this.onInputEmailTailHandler}
                    onSelectEmail={this.onSelectEmail}
                    onInputYearHandler={this.onInputYearHandler}
                    onInputMonthHandler={this.onInputMonthHandler}
                    onInputDayHandler={this.onInputDayHandler}
                    handleClickGender={this.handleClickGender}
                />
                <Agree
                    conditionChecked={conditionChecked}
                    personalChecked={personalChecked}
                    personalChecked2={personalChecked2}
                    EmailChecked={EmailChecked}
                    SMSChecked={SMSChecked}
                    AppChecked={AppChecked}
                    EveryChecked={EveryChecked}
                    MarketingEveryChecked={MarketingEveryChecked}
                    handleOnChangeCheckBox={this.handleOnChangeCheckBox}
                    handleOnChangeMarketingCheckBox={this.handleOnChangeMarketingCheckBox}
                    handleEveryCheck={this.handleEveryCheck}
                    handleMarketingEveryCheck={this.handleMarketingEveryCheck}
                />
                <button className="top" onClick={this.handleTop}> TOP ⇧ </button>
                <div className="finishDiv">
                    <button className="finish" onClick={this.onClickFinishBtn}>가입완료</button>
                </div>
            </div>
        )
    }
}

export default Join