import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {

    render() {
        return (
            <div className='footer'>
                <div className='logo'>
                    <img src='https://vmwebstage.azureedge.net/images-6ttqsvhl/web/logo.png' alt='vmlogo' />
                </div>
                <div className='text'>
                    <p>(주)비디오몬스터</p>
                    <p>
                        대표: 전동혁 / 서울시 중구 청계천로 40 CKL기업지원센터 (다동, 1301호)
                        <br />
                        사업자등록번호: 366-87-00202 / 통신판매업신고: 2019-서울강남-00038
                        <br />
                        전화: 02-554-6801 / 이메일: hello@videomonster.com
                    </p>
                    <p>
                        예금주 : (주)비디오몬스터
                        <br />
                        계좌번호 : IBK기업은행 065-139998-01-015
                    </p>
                    <p>
                        COPYRIGHT © Videomonster ALL RIGHTS RESERVED.
                    </p>
                </div>
            </div>
        )
    }
}

export default Footer