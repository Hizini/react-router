// 로그인 페이지 만들기
// 레퍼런스는 페플 로그인 참고
// 로그인/회원가입 버튼만 배치하여 작동하게 함
// 회원가입 버튼 -> 클릭시 회원가입 페이지로 이동
// POST/ http://localhost:2008/api/auth/sign-in
// body => id, password
/* 
    resonse.data
    => 
    * 200
    {
        token: string
    }

    * 400
    {
        ~~~가 없습니다.
    }

    * 500
    {
        Server Error
    }
*/
// const token = localStorage.getItem('token')
// localStorage.setItem('token', value)
// axios.get('balhbalh').then(resopnse => res....)    => X
// axios.get('endpoint', { header: { Authorization: `Barer ${token}` } })

/* 
    To-Do
    1. 로그인 페이지 퍼블리싱
    2. 로그인 프론트 작업 -> 토큰이 localStorage 에 저장되는 것이 목표 -> home 으로 push
    3. comment 페이지 프론트 코드 수정 -> 기존 axios call 부분에 header 넣어주기
     - 만약에 토큰 정보가 없다? => localStorage.getItem('token') 이걸 해왔는데 결과가 없다? => if (!token) {}
       -> alert('로그인이 필요합니다') 진행 후 login 페이지로 push
    4. 닉네임 input 제거 후 -> db에 있는 닉네임 정보를 요청해서 해당 닉네임으로 comment 를 작성할 수 있게 수정
*/


import React, { Component } from 'react'
import './index.scss'
import Login from './Login/login'

class SignIn extends Component {

    render() {
        return (
            <div className='signIn-container'>
                <div className='title-container'>
                    <div className="title">로그인</div>
                    <hr />
                </div>
                <Login/>
                <div className='finishButton'>
                    <button className="loginBtn">로그인</button>
                    <button className='joinBtn'>회원가입</button>
                </div>
            </div>

        )
    }
}

export default SignIn