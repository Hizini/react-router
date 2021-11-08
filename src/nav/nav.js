import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './nav.scss';


class Nav extends Component {
    render() {
        return (
            <div className='navbar'>
                <div className="nav-home">
                    <Link className="item" to="/">
                        <img className='vmlogo' src='https://vmwebstage.azureedge.net/images-6ttqsvhl/web/logo.png' alt='vmlogo' />
                    </Link>
                </div >
                <div className="nav-item">
                    <Link className="item" to="/Calculator">계산기</Link>
                </div>
                <div className="nav-item">
                    <Link className="item" to="/Join">회원가입</Link>
                </div>
            </div>
        )
    }
}

export default Nav