import React, { Component } from 'react'
import './login.scss';


class Login extends Component {

    render() {

        return (
            <>
                <div className="login-container">
                    <div className="login_input">
                        <input className="loginId" type="text" placeholder="아이디를 입력해주세요."></input>
                        <input className="loginPassword" type="password" placeholder="비밀번호를 입력해주세요."></input>
                    </div>
                </div>
            </>
        )
    }
}

export default Login