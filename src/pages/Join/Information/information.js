
import React, { Component } from 'react'
import './information.scss';
// import Email from './Email/email';
// import Birth from './Birth/birth';
import Gender from './Gender/gender';

class Information extends Component {
    render() {
        const { onInputNameHandler, onInputIdHandler, onInputPasswordHandler, onInputCheckedPasswordHandler, name, id, password, checkPassword } = this.props
        const { onInputEmailHeadHandler, onInputEmailTailHandler, onSelectEmail, emailHead, emailTail, selectEmail } = this.props
        const { onInputYearHandler, onInputMonthHandler, onInputDayHandler, year, month, day, isGender, handleClickGender } = this.props
        return (
            <div className='information-container'>
                <div className="join_info">
                    <h2>회원정보 입력</h2>
                    <div className="join_input">
                        <input className="name" type="text" onChange={onInputNameHandler} value={name} placeholder="이름"></input>
                        <input className="id" type="text" onChange={onInputIdHandler} value={id} placeholder="아이디"></input>
                        <input className="password" type="password" onChange={onInputPasswordHandler} value={password} placeholder="비밀번호"></input>
                        <input className="checkPassword" type="password" onChange={onInputCheckedPasswordHandler} value={checkPassword} placeholder="비밀번호 확인"></input>
                        <div className="notMatchPassword">
                            {password.length < 1 || checkPassword.length < 1 ? '' : (password === checkPassword ? <div className="match">일치</div> : '비밀번호가 일치하지 않습니다.')}
                        </div>
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
                        {/* <Email /> */}
                        <div className="birth-container">
                            <input className="year" type="text" onChange={onInputYearHandler} value={year} placeholder="생년 (yyyy)" maxLength="4" ></input>
                            <input className="month" type="text" onChange={onInputMonthHandler} value={month} placeholder="월 (mm)" maxLength="2" ></input>
                            <input className="day" type="text" onChange={onInputDayHandler} value={day} placeholder="일 (dd)" maxLength="2" ></input>
                        </div>
                        {/* <Birth /> */}
                        <Gender 
                            isGender={isGender}
                            selectGender={handleClickGender}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Information